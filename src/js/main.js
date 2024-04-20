import LOCALSTORAGE from "./_utils";
import cars from "./_cars";
import accessories from "./_accessories";
import { generateCarList } from "./_functions";
import Form from "./_Form";

import { localStorage_KEY, searchInput } from "./_Keys";

const formStatusCheck = LOCALSTORAGE.read(localStorage_KEY);
const inputHistory = LOCALSTORAGE.read(searchInput);

// DOM objects
const $cars = document.querySelector("#cars");
const $filter = document.querySelector("#filter");
// const $extras = document.querySelector("#extras");

// check form open onload
if (formStatusCheck.isOn === true) {
  new Form(true, formStatusCheck.uuid);
}

// check filter onload
if (inputHistory) {
  $filter.value = inputHistory;
  generateCarList(cars, $cars, inputHistory);
} else {
  generateCarList(cars, $cars);
}

// open car form
$cars.addEventListener("click", (e) => {
  const targetID = e.target.id;
  if (targetID === "buy") {
    const { uuid } = e.target.parentElement.dataset;
    LOCALSTORAGE.write(localStorage_KEY, { isOn: true, uuid });
    new Form(true, uuid);
  }
});

// input event
$filter.addEventListener("input", (e) => {
  const userFilter = e.target.value;
  LOCALSTORAGE.write(searchInput, userFilter);
  generateCarList(cars, $cars, userFilter);
});
