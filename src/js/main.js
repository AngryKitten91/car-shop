// import Timer from "./_timerClass.js";
// import LOCALSTORAGE from "./_utils.js";
// import DATA_NAME from "./_data.js";

const getCars = async () => {
  try {
    const data = await fetch("data.json");
    const cars = await data.json();
    return cars;
  } catch (error) {
    console.warn(error);
  }
};

getCars().then((val) => console.log(val));
