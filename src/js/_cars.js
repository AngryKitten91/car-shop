// cars data
const cars = [
  {
    producer: "Toyota",
    year_of_production: 2018,
    model: "Camry",
    horse_power: 203,
    mileage_km: 50000,
    uuid: "abfc6f45-3631-4df7-88b7-d8b16ea8f2c2",
    price: 67000,
    img: "https://images.pexels.com/photos/18142185/pexels-photo-18142185/free-photo-of-pole-niebieski-wies-samochod-sportowy.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Honda",
    year_of_production: 2019,
    model: "Civic",
    horse_power: 158,
    mileage_km: 40000,
    uuid: "aaf9a9cb-0884-43b7-9f37-7489b2a66aa9",
    price: 48000,
    img: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Ford",
    year_of_production: 2017,
    model: "Focus",
    horse_power: 160,
    mileage_km: 60000,
    uuid: "695b7381-f833-46da-a0b4-c6097a674aef",
    price: 54000,
    img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Chevrolet",
    year_of_production: 2016,
    model: "Malibu",
    horse_power: 160,
    mileage_km: 70000,
    uuid: "b54652b7-27af-4d11-a0a9-dc3de5e684e8",
    price: 51000,
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Nissan",
    year_of_production: 2019,
    model: "Altima",
    horse_power: 188,
    mileage_km: 35000,
    uuid: "5bb67056-641d-4c58-bb62-b772f0004488",
    price: 72000,
    img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "BMW",
    year_of_production: 2020,
    model: "3 Series",
    horse_power: 255,
    mileage_km: 20000,
    uuid: "cc3efb5f-3a18-4b95-96d3-58c8df4f1d44",
    price: 34000,
    img: "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Audi",
    year_of_production: 2018,
    model: "A4",
    horse_power: 248,
    mileage_km: 45000,
    uuid: "c242054e-2ab3-4b8f-9bc8-3d8c2b48564c",
    price: 49000,
    img: "https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Mercedes-Benz",
    year_of_production: 2017,
    model: "C-Class",
    horse_power: 241,
    mileage_km: 55000,
    uuid: "2d0e4b23-9d47-40d8-a14d-3d79ef2b9c0d",
    price: 66000,
    img: "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Volkswagen",
    year_of_production: 2018,
    model: "Passat",
    horse_power: 174,
    mileage_km: 40000,
    uuid: "7e12c9cc-cdd7-48b2-9c77-b0e4e1a18581",
    price: 68000,
    img: "https://images.pexels.com/photos/1383834/pexels-photo-1383834.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Hyundai",
    year_of_production: 2019,
    model: "Elantra",
    horse_power: 147,
    mileage_km: 30000,
    uuid: "66594a35-9641-4d62-8c6d-3dc3526e42d8",
    price: 56000,
    img: "https://images.pexels.com/photos/2127022/pexels-photo-2127022.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Kia",
    year_of_production: 2017,
    model: "Optima",
    horse_power: 185,
    mileage_km: 65000,
    uuid: "91ff6b8f-7fa6-44fb-b96f-c8d6c8b3663a",
    price: 64000,
    img: "https://images.pexels.com/photos/2832251/pexels-photo-2832251.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Subaru",
    year_of_production: 2018,
    model: "Impreza",
    horse_power: 152,
    mileage_km: 55000,
    uuid: "bd0f5a40-60c1-42ac-8840-4e3a9d636e36",
    price: 50000,
    img: "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Mazda",
    year_of_production: 2017,
    model: "Mazda3",
    horse_power: 155,
    mileage_km: 60000,
    uuid: "4ec4eb77-3d25-47e5-90bb-bb1273a04919",
    price: 57000,
    img: "https://images.pexels.com/photos/57409/ford-mustang-stallion-red-57409.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Lexus",
    year_of_production: 2019,
    model: "IS",
    horse_power: 241,
    mileage_km: 35000,
    uuid: "bea42d40-5185-4266-8030-b81c4c32a084",
    price: 53000,
    img: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Infiniti",
    year_of_production: 2016,
    model: "Q50",
    horse_power: 208,
    mileage_km: 70000,
    uuid: "65d31633-61d9-4413-b6c2-c8e7bbf4874b",
    price: 43000,
    img: "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Acura",
    year_of_production: 2018,
    model: "ILX",
    horse_power: 201,
    mileage_km: 50000,
    uuid: "4bc4b08f-46de-4ef8-88d2-ae8c5b0ac6d7",
    price: 61000,
    img: "https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Tesla",
    year_of_production: 2020,
    model: "Model 3",
    horse_power: 283,
    mileage_km: 15000,
    uuid: "4fe36b6b-3a41-4f47-bb82-62b0be7e1f7f",
    price: 48000,
    img: "https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Volvo",
    year_of_production: 2017,
    model: "S60",
    horse_power: 250,
    mileage_km: 60000,
    uuid: "47e7a62e-fbe8-4db4-9b5e-58b777a1308f",
    price: 62000,
    img: "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Toyota",
    year_of_production: 2019,
    model: "Corolla",
    horse_power: 132,
    mileage_km: 40000,
    uuid: "e0714377-55a9-4899-91c1-6f3243a066f0",
    price: 51000,
    img: "https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Honda",
    year_of_production: 2018,
    model: "Accord",
    horse_power: 192,
    mileage_km: 45000,
    uuid: "ac80d582-2b64-45d0-8e29-1e91871b62a3",
    price: 59000,
    img: "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Ford",
    year_of_production: 2019,
    model: "Fusion",
    horse_power: 175,
    mileage_km: 30000,
    uuid: "2531d2e0-7df6-42fc-a8d4-86e76e1e97b7",
    price: 67000,
    img: "https://images.pexels.com/photos/794435/pexels-photo-794435.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Chevrolet",
    year_of_production: 2017,
    model: "Cruze",
    horse_power: 153,
    mileage_km: 55000,
    uuid: "5fe92d97-0b0b-4d1a-b066-b39b2d5cbbe2",
    price: 70000,
    img: "https://images.pexels.com/photos/3772857/pexels-photo-3772857.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Nissan",
    year_of_production: 2018,
    model: "Maxima",
    horse_power: 300,
    mileage_km: 35000,
    uuid: "66ec66c7-bd38-4f12-a028-b7e24b3bc47a",
    price: 46000,
    img: "https://images.pexels.com/photos/757186/pexels-photo-757186.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "BMW",
    year_of_production: 2017,
    model: "5 Series",
    horse_power: 248,
    mileage_km: 50000,
    uuid: "36dfb09c-09d4-45f2-884d-18614508bb02",
    price: 64000,
    img: "https://images.pexels.com/photos/452099/pexels-photo-452099.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Audi",
    year_of_production: 2019,
    model: "A6",
    horse_power: 335,
    mileage_km: 25000,
    uuid: "1f417b15-88d7-48b9-bc49-1a6119ff89d0",
    price: 67000,
    img: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Mercedes-Benz",
    year_of_production: 2018,
    model: "E-Class",
    horse_power: 362,
    mileage_km: 20000,
    uuid: "5acda9d6-81ff-449e-867b-bcccf5ddcd10",
    price: 60000,
    img: "https://images.pexels.com/photos/1209774/pexels-photo-1209774.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Volkswagen",
    year_of_production: 2019,
    model: "Jetta",
    horse_power: 147,
    mileage_km: 40000,
    uuid: "bd607a60-ff56-466e-8932-3ac86941d7fc",
    price: 47000,
    img: "https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    producer: "Hyundai",
    year_of_production: 2016,
    model: "Sonata",
    horse_power: 185,
    mileage_km: 70000,
    uuid: "a85a6a9e-f62e-4604-9ee1-781868356ae4",
    price: 67000,
  },
  {
    producer: "Kia",
    year_of_production: 2018,
    model: "Forte",
    horse_power: 147,
    mileage_km: 50000,
    uuid: "f0e16c63-3129-446b-a54d-824ff646e4fc",
    price: 65000,
  },
  {
    producer: "Subaru",
    year_of_production: 2020,
    model: "Legacy",
    horse_power: 182,
    mileage_km: 30000,
    uuid: "b4789d38-98a1-4689-8c38-b8b4403a3a69",
    price: 62000,
  },
  {
    producer: "Mazda",
    year_of_production: 2019,
    model: "Mazda6",
    horse_power: 187,
    mileage_km: 45000,
    uuid: "2d2fd6cc-296d-420f-9372-6ff5f7e5cb0c",
    price: 64000,
  },
  {
    producer: "Lexus",
    year_of_production: 2017,
    model: "RX",
    horse_power: 295,
    mileage_km: 55000,
    uuid: "b6a816e5-43fd-4792-bda2-d6743e108732",
    price: 67000,
  },
  {
    producer: "Infiniti",
    year_of_production: 2019,
    model: "Q60",
    horse_power: 300,
    mileage_km: 35000,
    uuid: "17c5c58b-1d8d-4b99-819f-48bb92b4cfdb",
    price: 53000,
  },
  {
    producer: "Acura",
    year_of_production: 2017,
    model: "TLX",
    horse_power: 206,
    mileage_km: 40000,
    uuid: "9eb09cfa-e45b-4694-b9a6-bb106bfe5686",
    price: 69000,
  },
  {
    producer: "Tesla",
    year_of_production: 2018,
    model: "Model S",
    horse_power: 503,
    mileage_km: 20000,
    uuid: "0f08869c-2ff2-479b-a08d-7595b97e23af",
    price: 63000,
  },
  {
    producer: "Volvo",
    year_of_production: 2016,
    model: "XC60",
    horse_power: 250,
    mileage_km: 60000,
    uuid: "56e2f7cb-c4d8-4918-8e43-16db43044745",
    price: 52000,
  },
  {
    producer: "Toyota",
    year_of_production: 2017,
    model: "Rav4",
    horse_power: 203,
    mileage_km: 55000,
    uuid: "47136e53-9d87-4b3b-9b91-80590fbb4c3a",
    price: 62000,
  },
  {
    producer: "Honda",
    year_of_production: 2016,
    model: "Fit",
    horse_power: 130,
    mileage_km: 65000,
    uuid: "19ff1109-f82c-4149-8135-16e4fb93d663",
    price: 66000,
  },
  {
    producer: "Ford",
    year_of_production: 2018,
    model: "Escape",
    horse_power: 179,
    mileage_km: 45000,
    uuid: "8b0f7890-b62a-46ef-9a3a-9a9e07741f11",
    price: 54000,
  },
  {
    producer: "Chevrolet",
    year_of_production: 2019,
    model: "Equinox",
    horse_power: 170,
    mileage_km: 40000,
    uuid: "a285b5e4-c3c7-4e92-98b5-7a6ab50d0a04",
    price: 46000,
  },
  {
    producer: "Nissan",
    year_of_production: 2016,
    model: "Rogue",
    horse_power: 170,
    mileage_km: 60000,
    uuid: "fdebd41b-6284-4c43-9625-fb5d268b04b5",
    price: 55000,
  },
  {
    producer: "BMW",
    year_of_production: 2015,
    model: "X5",
    horse_power: 335,
    mileage_km: 70000,
    uuid: "9504b2ff-6fa7-4860-a4d1-d2f3de3c3fc9",
    price: 64000,
  },
  {
    producer: "Audi",
    year_of_production: 2017,
    model: "Q7",
    horse_power: 333,
    mileage_km: 50000,
    uuid: "76ec1da3-4e4a-45a0-8dab-037485579601",
    price: 54000,
  },
  {
    producer: "Mercedes-Benz",
    year_of_production: 2016,
    model: "GLC",
    horse_power: 241,
    mileage_km: 55000,
    uuid: "1354d6cd-b282-408d-9970-287327ddc4b0",
    price: 57000,
  },
  {
    producer: "Volkswagen",
    year_of_production: 2015,
    model: "Tiguan",
    horse_power: 184,
    mileage_km: 60000,
    uuid: "7d9130d1-3d8a-4e9e-8265-fa6c4096af52",
    price: 52000,
  },
  {
    producer: "Hyundai",
    year_of_production: 2014,
    model: "Tucson",
    horse_power: 164,
    mileage_km: 80000,
    uuid: "ce9ab6f4-6374-41f7-98f5-ec1b2347cc88",
    price: 45000,
  },
  {
    producer: "Kia",
    year_of_production: 2016,
    model: "Sportage",
    horse_power: 181,
    mileage_km: 75000,
    uuid: "f3e15ad1-4e88-4a65-926f-07ba8285db1a",
    price: 58000,
  },
  {
    producer: "Subaru",
    year_of_production: 2015,
    model: "Outback",
    horse_power: 175,
    mileage_km: 70000,
    uuid: "178a63f3-469f-4095-a1f3-e4d6b91f43bb",
    price: 54000,
  },
  {
    producer: "Mazda",
    year_of_production: 2014,
    model: "CX-5",
    horse_power: 187,
    mileage_km: 60000,
    uuid: "4be21f8b-9b7c-45a3-8fc0-620c25138fe5",
    price: 47000,
  },
  {
    producer: "Lexus",
    year_of_production: 2015,
    model: "NX",
    horse_power: 235,
    mileage_km: 50000,
    uuid: "152b8e1e-2c50-4c67-836d-47b1f7ee3278",
    price: 56000,
  },
  {
    producer: "Infiniti",
    year_of_production: 2014,
    model: "QX60",
    horse_power: 295,
    mileage_km: 60000,
    uuid: "6e234ab7-1085-4fe6-b484-af640c205151",
    price: 63000,
  },
  {
    producer: "Acura",
    year_of_production: 2015,
    model: "MDX",
    horse_power: 290,
    mileage_km: 70000,
    uuid: "51b31ff2-884d-47fb-8c99-3006b6b64a3c",
    price: 69000,
  },
  {
    producer: "Tesla",
    year_of_production: 2016,
    model: "Model X",
    horse_power: 518,
    mileage_km: 40000,
    uuid: "9e368078-90da-48e5-8847-77a7344d7c5b",
    price: 65000,
  },
  {
    producer: "Volvo",
    year_of_production: 2018,
    model: "XC90",
    horse_power: 316,
    mileage_km: 30000,
    uuid: "72f50430-cf1b-49b0-859a-3dc99f6da6fd",
    price: 58000,
  },
];

export default cars;
