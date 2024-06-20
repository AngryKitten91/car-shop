// generate cars list
export const generateCarList = (arr, targetElem, filter) => {
  targetElem.innerHTML = "";
  const arrFilter = arr.filter(({ producer, model }) => {
    if (filter) {
      const carName = `${producer} ${model}`.toLowerCase();
      const userFilter = filter.toLowerCase();
      return carName.includes(userFilter);
    }
    return true;
  });

  if (arrFilter.length === 0) {
    targetElem.insertAdjacentHTML(
      "beforeend",
      `<div class="c-wrap info-container fade-in text-center">
      <div>
      <h2>Ooops...</h2>
      <p>Brak wyników wyszukiwania</p>
      </div>
      <div>
      <img src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=740&t=st=1714144035~exp=1714144635~hmac=c6c3438e8ba5a717cd7fb9ac6009b3450f28ea308ca5a8cf2caa4d0b8572f667" 
      class="img fade-in"
      alt="Image by Freepik">
      </div>
      </div>`
    );
  } else {
    arrFilter.forEach(
      ({
        producer,
        year_of_production,
        model,
        horse_power,
        mileage_km,
        extras,
        uuid,
        price,
        img,
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
            price,
            img
          )
        );
      }
    );
  }
};

export const carSchema = (
  producer,
  year_of_production,
  model,
  horse_power,
  mileage_km,
  extras,
  uuid,
  price,
  img
) => {
  return `
    <div class="car" data-uuid=${uuid} data-extras="${extras}" data-producer="${producer}" data-model="${model}" data-hp="${horse_power}" data-mileage="${mileage_km}" data-year="${year_of_production}">
    <div class="car-img" style="width:100%;height:200px;background: url(${
      img ?? "https://placehold.co/600x400"
    });background-size: cover;background-position: center bottom">
    
    </div
      <h1 class="car-name">${producer}</h1>
      <div class="car-model"><span class="bold">Model:</span> ${model}</div>
      <div class="car-year"><span class="bold">Rok Produkcji:</span> ${year_of_production}</div>
      <div class="car-power"><span class="bold">Moc:</span> ${horse_power} HP</div>
      <div class="car-mileage"><span class="bold">Przebieg:</span> ${mileage_km} km</div>
      <div class="car-price"><span class="bold">Cena:</span> ${price}$</div>
      <div id="buy" class="car-buy btn btn-buy bold">KUP</div>
    </div>`;
};

export const carSummarySchema = (
  producer,
  model,
  year_of_production,
  mileage_km,
  horse_power,
  date,
  money,
  price,
  img
) => {
  return `
  <p class="header">Dziękujemy za Zakup!</p>
  <p class="">Podsumowanie:</p>
  <div class="form-section form-flex">
  <div>
  <p class="header">${producer} ${model}</p>
  <p>Rok: ${year_of_production},</p>
  <p>Przebieg: ${mileage_km}km,</p>
  <p>Moc: ${horse_power}HP</p>
  <p>Data dostawy: ${date}</p>
  <p>Opłata: ${money ? "Gotówka" : "Leasing"}</p>
  <p class="bold">Cena: ${price}$</p>
  </div>
  <div>
      <img class="car-img img" src="${img ?? "https://placehold.co/600x400"}" />
  </div>
  </div>
  <div class="form-section form-flex">
  <p>Dodatkowe Wyposażenie:</p>
  </div>
  `;
};

export const formSchema = (
  producer,
  model,
  year_of_production,
  mileage_km,
  horse_power,
  price,
  firstName,
  lastName,
  money,
  leasing,
  img
) => {
  return `
  <div id="close" class="btn btn-close close c c-flex--center">x</div>
<div id="form-content">
    <div class="form-section form-flex">
    <div>
    <p class="header">${producer} ${model}</p>
    <p>Rok: ${year_of_production},</p>
    <p>Przebieg: ${mileage_km}km,</p>
    <p>Moc: ${horse_power}HP</p>
    <p class="bold">Cena: ${price}$</p>
    </div>
    <div>
    <img class="car-img img" src="${img ?? "https://placehold.co/600x400"}" />
    </div>
    </div>
    <form id="form">
      <div class="form-section">
        <label for="firstName">Imię:</label><br />
        <input
          class="input-field input"
          type="text"
          id="firstName"
          maxlength="20"
          name="firstName"
          placeholder="Wprowadź Imię..."
          value="${firstName}"
          required
        /><br />
        <label for="secondName">Nazwisko:</label><br />
        <input
          class="input-field input"
          type="text"
          id="secondName"
          maxlength="20"
          name="secondName"
          placeholder="Wprowadź Nazwisko..."
          value="${lastName}"
          required
        /><br />
      </div>
      <div class="form-section">
        <label for="financing">Wybierz finansowanie:</label><br />
        <input
          class="input-field"
          type="radio"
          id="cash"
          name="financing"
          value="gotówka"
          ${money ? "checked" : ""}
        />
        <label for="cash">Gotówka</label><br />
        <input
          class="input-field"
          type="radio"
          id="leasing"
          name="financing"
          value="leasing"
          ${leasing ? "checked" : ""}

        />
        <label for="leasing">Leasing</label><br />
      </div>

      <div class="form-section" id="extras"><p>Dodatkowe wyposażenie:</p></div>

      <div class="form-section">
        <label for="deliveryDate">Data dostawy:</label><br />
        <select class="input-field" id="deliveryDate" name="deliveryDate">
        </select>
      </div>
      <div class="form-section" id="price">
      
      </div>
      <div class="form-section">
      <button class="btn btn-send" type="submit">ZAMÓW</button>
      </div>
      </div>

      <div class="close close-bottom"><p class="mt-50"><<< Powrót do listy</p></div>
    </form>`;
};
