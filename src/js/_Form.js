import LOCALSTORAGE from "./_utils";
import { localStorage_KEY } from "./_Keys";
import cars from "./_cars";
import accessories from "./_accessories";

export default class Form {
  constructor(isOn = true, uuid) {
    this.$formContainer = document.querySelector("#c-form");
    this.$form = document.querySelector("#form");

    this.uuid = uuid;
    this.isOn = isOn;
    this.extras = [];

    this.getDataFromUUID();
    this.prepareDOM();
    this.addExtras();
    this.addDeliveryDate();
    this.handleListeners();
    this.render();
  }
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
      <div id="form-content">
      <p class="bold">${producer} ${model}</p>
      <p>${year_of_production}, ${mileage_km}km, ${horse_power}HP</p>
      <p class="bold">${price}$</p>
      </div>
      <form id="form">
        <div>
          <label for="firstName">Imię:</label><br />
          <input
            class="input-field"
            type="text"
            id="firstName"
            name="firstName"
            required
          /><br />
          <label for="secondName">Nazwisko:</label><br />
          <input
            class="input-field"
            type="text"
            id="secondName"
            name="secondName"
            required
          /><br />
        </div>
        <div>
          <label for="financing">Wybierz finansowanie:</label><br />
          <input
            class="input-field"
            type="radio"
            id="cash"
            name="financing"
            value="gotówka"
            checked
          />
          <label for="cash">Gotówka</label><br />
          <input
            class="input-field"
            type="radio"
            id="leasing"
            name="financing"
            value="leasing"
          />
          <label for="leasing">Leasing</label><br />
        </div>
  
        <div id="extras"></div>
  
        <div>
          <label for="deliveryDate">Data dostawy:</label><br />
          <select class="input-field" id="deliveryDate" name="deliveryDate">
            <!-- JavaScript is used to generate delivery dates dynamically -->
          </select>
        </div>
        <button type="submit">Wyślij</button>
      </form>`;
    this.$form.innerHTML = fromContent;
    this.$formBtnClose = document.querySelector("#close");
    this.$submitForm = document.querySelector("#form");
    this.$deliveryDateSelect = document.querySelector("#deliveryDate");
    this.$extras = document.querySelector("#extras");
  };
  handleListeners = () => {
    this.$formBtnClose.addEventListener("click", () => {
      LOCALSTORAGE.write(localStorage_KEY, {
        isOn: false,
        uuid: this.car.uuid,
      });
      this.$formContainer.classList.toggle("d-none");
    });

    this.$submitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const $inputs = document.querySelectorAll(".input-field");
      console.log([...$inputs].map((e) => e));
    });

    this.$submitForm.addEventListener("change", (e) => {
      console.log(e.target, e.target.value, e.target.checked);
    });

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
        console.log(this.extras);
      });
    });
  };
  getDataFromUUID = () => {
    this.car = cars.find(({ uuid }) => this.uuid === uuid);
    // console.log(this.car);
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
      this.$extras.insertAdjacentHTML(
        "beforeend",
        `<div data-id="${id}" data-price="${price}" class="extra"><p>${name}</p><p class="extra-price">+${price}$</p></div>`
      );
    });
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
