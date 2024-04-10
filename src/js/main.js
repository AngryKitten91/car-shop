// import Timer from "./_timerClass.js";
// import LOCALSTORAGE from "./_utils.js";
// import DATA_NAME from "./_data.js";

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

const $cars = document.querySelector("#cars");
const $formContainer = document.querySelector("#c-form");
const $form = document.querySelector("#form-content");
const $formBtnClose = document.querySelector("#close");

new Form();

$cars.addEventListener("click", (e) => {
  const targetID = e.target.id;
  if (targetID === "buy") {
    const elemDataset = e.target.parentElement.dataset;
    $form.innerHTML = `<p>${elemDataset.producer}</p>`;
    $formContainer.classList.toggle("d-none");
  }
});

$formBtnClose.addEventListener("click", () => {
  console.log("click");
  $formContainer.classList.toggle("d-none");
});

const getCars = async () => {
  try {
    const data = await fetch("assets/data.json");
    const cars = await data.json();
    return cars;
  } catch (error) {
    console.warn(error);
  }
};

const carSchema = (
  producer,
  year_of_production,
  model,
  horse_power,
  mileage_km
) => {
  return `
  <div class="car" data-producer="${producer}" data-model="${model}" data-hp="${horse_power}" data-mileage="${mileage_km}" data-year="${year_of_production}">
  <img class="car-img img" src="https://placehold.co/600x400" />
    <h1 class="car-name">${producer}</h1>
    <div class="car-model">${model}</div>
    <div class="car-year">${year_of_production}</div>
    <div class="car-power">${horse_power} HP</div>
    <div class="car-mileage">${mileage_km} km</div>
    <div id="buy" class="car-buy btn btn-buy"><strong>BUY</strong></div>
  </div>`;
};

getCars().then(({ cars }) => {
  cars.map(
    ({ producer, year_of_production, model, horse_power, mileage_km }) => {
      $cars.insertAdjacentHTML(
        "beforeend",
        carSchema(producer, year_of_production, model, horse_power, mileage_km)
      );
    }
  );
});
