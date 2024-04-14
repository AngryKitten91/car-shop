const carSchema = (
  producer,
  year_of_production,
  model,
  horse_power,
  mileage_km,
  extras
) => {
  return `
    <div class="car" data-extras="${extras}" data-producer="${producer}" data-model="${model}" data-hp="${horse_power}" data-mileage="${mileage_km}" data-year="${year_of_production}">
    <img class="car-img img" src="https://placehold.co/600x400" />
      <h1 class="car-name">${producer}</h1>
      <div class="car-model"><span class="bold">Model:</span> ${model}</div>
      <div class="car-year"><span class="bold">Production Year:</span> ${year_of_production}</div>
      <div class="car-power"><span class="bold">Horde Power:</span> ${horse_power} HP</div>
      <div class="car-mileage"><span class="bold">Mileage:</span> ${mileage_km} km</div>
      <div id="buy" class="car-buy btn btn-buy bold">BUY</div>
    </div>`;
};

export default carSchema;
