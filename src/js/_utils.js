export default class LOCALSTORAGE {
  static write(key, value) {
    return JSON.stringify(localStorage.setItem(key, value));
  }

  static read(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static readItem(key, itemName) {
    const value = JSON.parse(localStorage.getItem(key));
    return value.find(({ uuid }) => uuid === itemName);
  }
}
