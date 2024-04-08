// import Timer from "./_timerClass.js";
// import LOCALSTORAGE from "./_utils.js";
// import DATA_NAME from "./_data.js";

const $cars = document.querySelector("#cars");

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
  <div class="car">
    <div class="car-name"><h1>${producer}</h1></div>
    <div class="car-name">${model}</div>
    <div class="car-name">${year_of_production}</div>
    <div class="car-name">${horse_power} HP</div>
    <div class="car-name">${mileage_km} km</div>
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
