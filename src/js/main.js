import LOCALSTORAGE from "./_utils";
import cars from "./_cars";
import carSchema from "./_carSchema";
import Form from "./_Form";
import { localStorage_KEY } from "./_Keys";

// console.log(JSON.parse(LOCALSTORAGE.read(localStorage_KEY)));
const formStatusCheck = LOCALSTORAGE.read(localStorage_KEY);
if (formStatusCheck.isOn === true) {
  new Form(true, formStatusCheck.uuid);
}

// DOM objects
const $cars = document.querySelector("#cars");
// const $extras = document.querySelector("#extras");



// extra schema
function singleExtra(elem, i) {
  return `<div>
  <input class="input-field" type="checkbox" id="extra${i}" name="extra${i}" />
  <label for="scales">${elem}</label>
  </div>`;
}

// open car form
$cars.addEventListener("click", (e) => {
  const targetID = e.target.id;
  if (targetID === "buy") {
    const { uuid } = e.target.parentElement.dataset;
    LOCALSTORAGE.write(localStorage_KEY, { isOn: true, uuid });

    new Form(true, uuid);

    // extras.map((elem, i) => {
    //   $extras.insertAdjacentHTML("beforeend", singleExtra(elem, i));
    // });
    // $formContainer.classList.toggle("d-none");
  }
});

// generate cars list
cars.map(
  ({
    producer,
    year_of_production,
    model,
    horse_power,
    mileage_km,
    extras,
    uuid,
    price,
  }) => {
    $cars.insertAdjacentHTML(
      "beforeend",
      carSchema(
        producer,
        year_of_production,
        model,
        horse_power,
        mileage_km,
        extras,
        uuid,
        price
      )
    );
  }
);
