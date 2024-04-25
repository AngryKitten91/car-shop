import LOCALSTORAGE from "./_utils";
import { localStorage_KEY, extrasID, formData } from "./_Keys";
import cars from "./_cars";
import accessories from "./_accessories";

export default class Form {
  constructor(isOn = true, uuid) {
    this.$formContainer = document.querySelector("#c-form");
    this.$form = document.querySelector("#form");

    this.uuid = uuid;
    this.isOn = isOn;
    this.extras = [];
    this.firstName = "";
    this.lastName = "";
    this.money = true;
    this.leasing = false;
    this.date = "";

    this.getDataOnLoad();
    this.prepareDOM();
    this.addExtras();
    this.addDeliveryDate();
    this.handleListeners();
    this.handlePrice();
    this.show();
  }

  getDataOnLoad = () => {
    // get car data
    this.car = cars.find(({ uuid }) => this.uuid === uuid);

    // load localstorage form data
    const extras = LOCALSTORAGE.read(extrasID);
    this.extras = extras ? extras : [];

    const dataForm = LOCALSTORAGE.read(formData);

    if (dataForm) {
      const [firstName, lastName, money, leasing, date] =
        LOCALSTORAGE.read(formData);
      this.firstName = firstName;
      this.lastName = lastName;
      this.money = money;
      this.leasing = leasing;
      this.date = date;
    }
  };
  prepareDOM = () => {
    const {
      producer,
      model,
      year_of_production,
      mileage_km,
      horse_power,
      price,
    } = this.car;
    const fromContent = `
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
      <img class="car-img img" src="https://placehold.co/600x400" />
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
            value="${this.firstName}"
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
            value="${this.lastName}"
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
            ${this.money ? "checked" : ""}
          />
          <label for="cash">Gotówka</label><br />
          <input
            class="input-field"
            type="radio"
            id="leasing"
            name="financing"
            value="leasing"
            ${this.leasing ? "checked" : ""}

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

        <div class="close close-bottom"><p><<< Powrót do listy</p></div>
      </form>`;
    this.$form.innerHTML = fromContent;
    this.$formContent = document.querySelector("#form-content");
    this.$formBtnClose = document.querySelectorAll(".close");
    this.$submitForm = document.querySelector("#form");
    this.$inputs = document.querySelectorAll(".input-field");
    this.$deliveryDateSelect = document.querySelector("#deliveryDate");
    this.$extras = document.querySelector("#extras");
    this.$price = document.querySelector("#price");
  };

  //   event handlers
  handleListeners = () => {
    // TODO: ADD GO BACK BUTTON
    this.$formBtnClose.forEach((e) =>
      e.addEventListener("click", () => {
        LOCALSTORAGE.write(localStorage_KEY, {
          isOn: false,
          uuid: this.car.uuid,
        });
        this.$formContainer.classList.toggle("d-none");
        this.clear();
      })
    );

    //form submit
    this.$submitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      LOCALSTORAGE.clear();

      const {
        producer,
        model,
        year_of_production,
        mileage_km,
        horse_power,
        price,
      } = this.car;

      const formSum = `
      <p class="header">Dziękujemy za Zakup!</p>
      <p class="bold">Podsumowanie:</p>
      <div class="form-section form-flex">
      <div>
      <p class="header">${producer} ${model}</p>
      <p>Rok: ${year_of_production},</p>
      <p>Przebieg: ${mileage_km}km,</p>
      <p>Moc: ${horse_power}HP</p>
      <p>Data dostawy: ${this.date}</p>
      <p>Opłata: ${this.money ? "Gotówka" : "Leasing"}</p>
      <p class="bold">Cena: ${price}$</p>
      </div>
      <div>
      <img class="car-img img" src="https://placehold.co/600x400" />
      </div>
      </div>
      <p>Dodatkowe Wyposażenie:</p>
      `;

      this.$formContent.innerHTML = formSum;

      if (this.extras.length === 0) {
        this.$formContent.insertAdjacentHTML(
          "beforeend",
          `<div class="extra">
              <p>Brak dodatkowego wyposażenia</p>
          </div>`
        );
      } else {
        accessories.forEach(({ id, name, price }) => {
          const isIDused = this.extras.includes(id);
          if (isIDused) {
            this.$formContent.insertAdjacentHTML(
              "beforeend",
              `<div data-id="${id}" data-price="${price}" class="extra">
                    <p>${name}</p><p class="extra-price">+${price}$</p>
                    </div>`
            );
          }
        });
      }
    });

    // input change
    this.$submitForm.addEventListener("change", () => {
      const [firstName, lastName, money, leasing, date] = [...this.$inputs];
      this.firstName = firstName.value;
      this.lastName = firstName.value;
      this.money = money.checked;
      this.leasing = leasing.checked;
      this.date = date.value;
      const inputs = [
        firstName.value,
        lastName.value,
        money.checked,
        leasing.checked,
        date.value,
      ];
      LOCALSTORAGE.write(formData, inputs);
    });

    // extras change
    this.$extra = document.querySelectorAll(".extra");
    this.$extra.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("extra-pick");
        const clickExtraId = e.currentTarget.dataset.id;
        if (this.extras.includes(clickExtraId)) {
          const newExtraArr = this.extras.filter((elem) => {
            return elem !== clickExtraId;
          });
          this.extras = newExtraArr;
        } else {
          this.extras.push(clickExtraId);
        }
        LOCALSTORAGE.write(extrasID, this.extras);
        this.handlePrice();
      });
    });
  };

  addDeliveryDate = () => {
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const option = document.createElement("option");

      option.text = date.toLocaleDateString();
      const dateFormat = date.toISOString().split("T")[0];
      option.value = dateFormat; // Format: YYYY-MM-DD

      if (dateFormat === this.date) {
        option.setAttribute("selected", true);
      }
      this.$deliveryDateSelect.add(option);
    }
  };
  addExtras = () => {
    accessories.forEach(({ id, name, price }) => {
      const isIDused = this.extras.includes(id);
      this.$extras.insertAdjacentHTML(
        "beforeend",
        `<div data-id="${id}" data-price="${price}" class="extra ${
          isIDused ? "extra-pick" : ""
        }"><p>${name}</p><p class="extra-price">+${price}$</p></div>`
      );
    });
  };

  handlePrice = () => {
    const carPrice = this.car.price;
    const carExtras = this.extras
      .map((e) => {
        const extraSearch = accessories.find(({ id }) => {
          return id === e;
        });
        return extraSearch;
      })
      .map(({ price }) => price)
      .reduce((a, b) => a + b, 0);

    const totalPrice = carPrice + carExtras;

    this.totalPrice = totalPrice;
    this.$price.innerHTML = `<p>Łączna kwota: <strong>${totalPrice}</strong>$</p>`;
  };

  show = () => {
    if (this.isOn === true) {
      this.$formContainer.classList.toggle("d-none");
    }
  };

  clear = () => {
    this.$form.innerHTML = "";
  };
}
