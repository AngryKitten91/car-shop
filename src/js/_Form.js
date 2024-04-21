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
    this.render();
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
      console.log(lastName);
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
    const fromContent = `<div id="close" class="btn btn-close c c-flex--center">x</div>
      <div class="form-section">
      <p class="header">${producer} ${model}</p>
      <p>${year_of_production}, ${mileage_km}km, ${horse_power}HP</p>
      <p class="bold">${price}$</p>
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
          <select class="input-field" value="${
            this.date
          }" id="deliveryDate" name="deliveryDate">
          </select>
        </div>
        <div class="form-section" id="price">
        
        </div>
        <div class="form-section">
        <button class="btn btn-send" type="submit">ZAMÓW</button>
        </div>
      </form>`;
    this.$form.innerHTML = fromContent;
    this.$formBtnClose = document.querySelector("#close");
    this.$submitForm = document.querySelector("#form");
    this.$inputs = document.querySelectorAll(".input-field");
    this.$deliveryDateSelect = document.querySelector("#deliveryDate");
    this.$extras = document.querySelector("#extras");
    this.$price = document.querySelector("#price");
  };

  //   event handlers
  handleListeners = () => {
    //   close butotn
    // TODO: ADD GO BACK BUTTON
    this.$formBtnClose.addEventListener("click", () => {
      LOCALSTORAGE.write(localStorage_KEY, {
        isOn: false,
        uuid: this.car.uuid,
      });
      this.$formContainer.classList.toggle("d-none");
    });

    //form submit
    this.$submitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const $inputs = document.querySelectorAll(".input-field");
    });

    // input change
    this.$submitForm.addEventListener("change", () => {
      const [firstName, lastName, money, leasing, date] = [...this.$inputs];
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
      option.value = date.toISOString().split("T")[0]; // Format: YYYY-MM-DD
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
    this.$price.innerHTML = `<p>TOTAL: <strong>${totalPrice}</strong>$</p>`;
  };

  render = () => {
    if (this.isOn === true) {
      this.$formContainer.classList.toggle("d-none");
    }
  };

  clear = () => {
    //TODO: clear b4 close
  };
}
