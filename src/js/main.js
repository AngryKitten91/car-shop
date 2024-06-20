import LOCALSTORAGE from "./_utils";
import cars from "./_cars";
import { onKonamiCode } from "./_utils";
import { generateCarList } from "./_schemas";
import Form from "./_Form";

import { localStorage_KEY, searchInput } from "./_keys";

// check form opened / closed
const formStatusCheck = LOCALSTORAGE.read(localStorage_KEY)
  ? LOCALSTORAGE.read(localStorage_KEY)
  : false;

// check filter
const inputHistory = LOCALSTORAGE.read(searchInput);

// DOM objects
const $cars = document.querySelector("#cars");
const $filter = document.querySelector("#filter");

// check form open onload
if (formStatusCheck.isOn) {
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

// easter egg added
onKonamiCode(function () {
  alert("Congratulations!");
});
