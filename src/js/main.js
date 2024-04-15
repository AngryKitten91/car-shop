// import Timer from "./_timerClass.js";
// import DATA_NAME from "./_data.js";
import LOCALSTORAGE from "./_utils.js";
import cars from "./_cars";
import carSchema from "./_carSchema";

const localStorage_KEY = "carFormOpen";

class Form {
  constructor(isOn = true) {
    this.$formContainer = document.querySelector("#c-form");
    this.$formBtnClose = document.querySelector("#close");

    this.isOn = isOn;
    this.handleLoad();
  }
  prepareDOM = () => {
    //TODO: Prepare form dom
  };
  handleLoad = () => {
    if (this.isOn === true) {
      this.$formContainer.classList.toggle("d-none");
    }
  };
  clear = () => {
    //TODO: clear b4 close
  };
}
console.log(JSON.parse(LOCALSTORAGE.read(localStorage_KEY)));
if (JSON.parse(LOCALSTORAGE.read(localStorage_KEY)) === true) {
  new Form();
}

// DOM objects
const $cars = document.querySelector("#cars");
const $formContainer = document.querySelector("#c-form");
const $form = document.querySelector("#form-content");
const $formBtnClose = document.querySelector("#close");
const $deliveryDateSelect = document.querySelector("#deliveryDate");
const $extras = document.querySelector("#extras");
const $submitForm = document.querySelector("#form");

// add delivery dates
const today = new Date();
for (let i = 0; i < 14; i++) {
  const date = new Date(today);
  date.setDate(date.getDate() + i);
  const option = document.createElement("option");
  option.text = date.toLocaleDateString();
  option.value = date.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  $deliveryDateSelect.add(option);
}

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
    LOCALSTORAGE.write(localStorage_KEY, true);
    const elemDataset = e.target.parentElement.dataset;
    const { producer, model, year, mileage, hp, uuid } = elemDataset;
    console.log(uuid);
    $form.innerHTML = `<p>${producer} ${model}</p><p>${year}, ${mileage}km, ${hp}HP</p>`;
    const extras = elemDataset.extras.split(",");
    $extras.innerHTML = "";
    extras.map((elem, i) => {
      $extras.insertAdjacentHTML("beforeend", singleExtra(elem, i));
    });
    $formContainer.classList.toggle("d-none");
  }
});

// close form
$formBtnClose.addEventListener("click", () => {
  LOCALSTORAGE.write(localStorage_KEY, false);
  $formContainer.classList.toggle("d-none");
});

// form submit
$submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const $inputs = document.querySelectorAll(".input-field");
  console.log([...$inputs].map((e) => e));
});

// form on change
$submitForm.addEventListener("change", (e) => {
  console.log(e.target, e.target.value, e.target.checked);
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
        uuid
      )
    );
  }
);
