// import Timer from "./_timerClass.js";
// import LOCALSTORAGE from "./_utils.js";
// import DATA_NAME from "./_data.js";

const $cars = document.querySelector("#cars");
$cars.addEventListener("click", (e) => {
  if (e.target.parentElement.dataset.producer) {
    console.log(e.target.parentElement.dataset.producer);
  } else {
    console.log(e.target.dataset.producer);
  }
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
    <h1 class="car-name">${producer}</h1>
    <div class="car-model">${model}</div>
    <div class="car-year">${year_of_production}</div>
    <div class="car-power">${horse_power} HP</div>
    <div class="car-mileage">${mileage_km} km</div>
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
