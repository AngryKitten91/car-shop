// generate cars list
export const generateCarList = (arr, targetElem, filter) => {
  targetElem.innerHTML = "";
  arr
    .filter(({ producer, model }) => {
      if (filter) {
        const carName = `${producer} ${model}`.toLowerCase();
        const userFilter = filter.toLowerCase();
        return carName.includes(userFilter);
      }
      return true;
    })
    .forEach(
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
        targetElem.insertAdjacentHTML(
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
};

export const carSchema = (
  producer,
  year_of_production,
  model,
  horse_power,
  mileage_km,
  extras,
  uuid,
  price
) => {
  return `
    <div class="car" data-uuid=${uuid} data-extras="${extras}" data-producer="${producer}" data-model="${model}" data-hp="${horse_power}" data-mileage="${mileage_km}" data-year="${year_of_production}">
    <img class="car-img img pb-20" src="https://placehold.co/600x400" />
      <h1 class="car-name">${producer}</h1>
      <div class="car-model"><span class="bold">Model:</span> ${model}</div>
      <div class="car-year"><span class="bold">Rok Produkcji:</span> ${year_of_production}</div>
      <div class="car-power"><span class="bold">Moc:</span> ${horse_power} HP</div>
      <div class="car-mileage"><span class="bold">Przebieg:</span> ${mileage_km} km</div>
      <div class="car-price"><span class="bold">Cena:</span> ${price}$</div>
      <div id="buy" class="car-buy btn btn-buy bold">KUP</div>
    </div>`;
};
