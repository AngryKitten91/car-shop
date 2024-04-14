// import Timer from "./_timerClass.js";
// import LOCALSTORAGE from "./_utils.js";
// import DATA_NAME from "./_data.js";
import cars from "./_cars";
import carSchema from "./_carSchema";

class Form {
  constructor(isOn = true) {
    this.isOn = isOn;
    this.$formContainer = document.querySelector("#c-form");
    this.handleLoad();
  }

  handleLoad = () => {
    if (this.isOn === true) {
      this.$formContainer.classList.toggle("d-none");
    }
  };
}

// new Form();

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

function singleExtra(elem, i) {
  return `<div>
  <input type="checkbox" id="extra${i}" name="extra${i}" />
  <label for="scales">${elem}</label>
  </div>`;
}

$cars.addEventListener("click", (e) => {
  const targetID = e.target.id;
  if (targetID === "buy") {
    const elemDataset = e.target.parentElement.dataset;
    const { producer, model, year, mileage, hp } = elemDataset;
    $form.innerHTML = `<p>${producer} ${model}</p><p>${year}, ${mileage}km, ${hp}HP</p>`;
    const extras = elemDataset.extras.split(",");
    $extras.innerHTML = "";
    extras.map((elem, i) => {
      $extras.insertAdjacentHTML("beforeend", singleExtra(elem, i));
    });
    $formContainer.classList.toggle("d-none");
  }
});

$formBtnClose.addEventListener("click", () => {
  console.log("click");
  $formContainer.classList.toggle("d-none");
});

$submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements.length);
});

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
  }) => {
    $cars.insertAdjacentHTML(
      "beforeend",
      carSchema(
        producer,
        year_of_production,
        model,
        horse_power,
        mileage_km,
        extras
      )
    );
  }
);
