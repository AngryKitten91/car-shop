export default class LOCALSTORAGE {
  static write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static read(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static readItem(key, itemName) {
    const value = JSON.parse(localStorage.getItem(key));
    return value.find(({ uuid }) => uuid === itemName);
  }

  static clear() {
    localStorage.clear();
  }
}

export const onKonamiCode = (cb) => {
  var input = "";
  var key = "38384040373937396665";
  document.addEventListener("keydown", function (e) {
    input += "" + e.keyCode;
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = "" + e.keyCode;
  });
};
