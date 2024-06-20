(()=>{"use strict";class e{static write(e,o){localStorage.setItem(e,JSON.stringify(o))}static read(e){return JSON.parse(localStorage.getItem(e))}static readItem(e,o){return JSON.parse(localStorage.getItem(e)).find((({uuid:e})=>e===o))}static clear(){localStorage.clear()}}const o=[{producer:"Toyota",year_of_production:2018,model:"Camry",horse_power:203,mileage_km:5e4,uuid:"abfc6f45-3631-4df7-88b7-d8b16ea8f2c2",price:67e3,img:"https://images.pexels.com/photos/18142185/pexels-photo-18142185/free-photo-of-pole-niebieski-wies-samochod-sportowy.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Honda",year_of_production:2019,model:"Civic",horse_power:158,mileage_km:4e4,uuid:"aaf9a9cb-0884-43b7-9f37-7489b2a66aa9",price:48e3,img:"https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Ford",year_of_production:2017,model:"Focus",horse_power:160,mileage_km:6e4,uuid:"695b7381-f833-46da-a0b4-c6097a674aef",price:54e3,img:"https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Chevrolet",year_of_production:2016,model:"Malibu",horse_power:160,mileage_km:7e4,uuid:"b54652b7-27af-4d11-a0a9-dc3de5e684e8",price:51e3,img:"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Nissan",year_of_production:2019,model:"Altima",horse_power:188,mileage_km:35e3,uuid:"5bb67056-641d-4c58-bb62-b772f0004488",price:72e3,img:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"BMW",year_of_production:2020,model:"3 Series",horse_power:255,mileage_km:2e4,uuid:"cc3efb5f-3a18-4b95-96d3-58c8df4f1d44",price:34e3,img:"https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Audi",year_of_production:2018,model:"A4",horse_power:248,mileage_km:45e3,uuid:"c242054e-2ab3-4b8f-9bc8-3d8c2b48564c",price:49e3,img:"https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Mercedes-Benz",year_of_production:2017,model:"C-Class",horse_power:241,mileage_km:55e3,uuid:"2d0e4b23-9d47-40d8-a14d-3d79ef2b9c0d",price:66e3,img:"https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Volkswagen",year_of_production:2018,model:"Passat",horse_power:174,mileage_km:4e4,uuid:"7e12c9cc-cdd7-48b2-9c77-b0e4e1a18581",price:68e3,img:"https://images.pexels.com/photos/1383834/pexels-photo-1383834.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Hyundai",year_of_production:2019,model:"Elantra",horse_power:147,mileage_km:3e4,uuid:"66594a35-9641-4d62-8c6d-3dc3526e42d8",price:56e3,img:"https://images.pexels.com/photos/2127022/pexels-photo-2127022.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Kia",year_of_production:2017,model:"Optima",horse_power:185,mileage_km:65e3,uuid:"91ff6b8f-7fa6-44fb-b96f-c8d6c8b3663a",price:64e3,img:"https://images.pexels.com/photos/2832251/pexels-photo-2832251.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Subaru",year_of_production:2018,model:"Impreza",horse_power:152,mileage_km:55e3,uuid:"bd0f5a40-60c1-42ac-8840-4e3a9d636e36",price:5e4,img:"https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Mazda",year_of_production:2017,model:"Mazda3",horse_power:155,mileage_km:6e4,uuid:"4ec4eb77-3d25-47e5-90bb-bb1273a04919",price:57e3,img:"https://images.pexels.com/photos/57409/ford-mustang-stallion-red-57409.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Lexus",year_of_production:2019,model:"IS",horse_power:241,mileage_km:35e3,uuid:"bea42d40-5185-4266-8030-b81c4c32a084",price:53e3,img:"https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Infiniti",year_of_production:2016,model:"Q50",horse_power:208,mileage_km:7e4,uuid:"65d31633-61d9-4413-b6c2-c8e7bbf4874b",price:43e3,img:"https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Acura",year_of_production:2018,model:"ILX",horse_power:201,mileage_km:5e4,uuid:"4bc4b08f-46de-4ef8-88d2-ae8c5b0ac6d7",price:61e3,img:"https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Tesla",year_of_production:2020,model:"Model 3",horse_power:283,mileage_km:15e3,uuid:"4fe36b6b-3a41-4f47-bb82-62b0be7e1f7f",price:48e3,img:"https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Volvo",year_of_production:2017,model:"S60",horse_power:250,mileage_km:6e4,uuid:"47e7a62e-fbe8-4db4-9b5e-58b777a1308f",price:62e3,img:"https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Toyota",year_of_production:2019,model:"Corolla",horse_power:132,mileage_km:4e4,uuid:"e0714377-55a9-4899-91c1-6f3243a066f0",price:51e3,img:"https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Honda",year_of_production:2018,model:"Accord",horse_power:192,mileage_km:45e3,uuid:"ac80d582-2b64-45d0-8e29-1e91871b62a3",price:59e3,img:"https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Ford",year_of_production:2019,model:"Fusion",horse_power:175,mileage_km:3e4,uuid:"2531d2e0-7df6-42fc-a8d4-86e76e1e97b7",price:67e3,img:"https://images.pexels.com/photos/794435/pexels-photo-794435.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Chevrolet",year_of_production:2017,model:"Cruze",horse_power:153,mileage_km:55e3,uuid:"5fe92d97-0b0b-4d1a-b066-b39b2d5cbbe2",price:7e4,img:"https://images.pexels.com/photos/3772857/pexels-photo-3772857.png?auto=compress&cs=tinysrgb&w=600"},{producer:"Nissan",year_of_production:2018,model:"Maxima",horse_power:300,mileage_km:35e3,uuid:"66ec66c7-bd38-4f12-a028-b7e24b3bc47a",price:46e3,img:"https://images.pexels.com/photos/757186/pexels-photo-757186.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"BMW",year_of_production:2017,model:"5 Series",horse_power:248,mileage_km:5e4,uuid:"36dfb09c-09d4-45f2-884d-18614508bb02",price:64e3,img:"https://images.pexels.com/photos/452099/pexels-photo-452099.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Audi",year_of_production:2019,model:"A6",horse_power:335,mileage_km:25e3,uuid:"1f417b15-88d7-48b9-bc49-1a6119ff89d0",price:67e3,img:"https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Mercedes-Benz",year_of_production:2018,model:"E-Class",horse_power:362,mileage_km:2e4,uuid:"5acda9d6-81ff-449e-867b-bcccf5ddcd10",price:6e4,img:"https://images.pexels.com/photos/1209774/pexels-photo-1209774.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Volkswagen",year_of_production:2019,model:"Jetta",horse_power:147,mileage_km:4e4,uuid:"bd607a60-ff56-466e-8932-3ac86941d7fc",price:47e3,img:"https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=600"},{producer:"Hyundai",year_of_production:2016,model:"Sonata",horse_power:185,mileage_km:7e4,uuid:"a85a6a9e-f62e-4604-9ee1-781868356ae4",price:67e3},{producer:"Kia",year_of_production:2018,model:"Forte",horse_power:147,mileage_km:5e4,uuid:"f0e16c63-3129-446b-a54d-824ff646e4fc",price:65e3},{producer:"Subaru",year_of_production:2020,model:"Legacy",horse_power:182,mileage_km:3e4,uuid:"b4789d38-98a1-4689-8c38-b8b4403a3a69",price:62e3},{producer:"Mazda",year_of_production:2019,model:"Mazda6",horse_power:187,mileage_km:45e3,uuid:"2d2fd6cc-296d-420f-9372-6ff5f7e5cb0c",price:64e3},{producer:"Lexus",year_of_production:2017,model:"RX",horse_power:295,mileage_km:55e3,uuid:"b6a816e5-43fd-4792-bda2-d6743e108732",price:67e3},{producer:"Infiniti",year_of_production:2019,model:"Q60",horse_power:300,mileage_km:35e3,uuid:"17c5c58b-1d8d-4b99-819f-48bb92b4cfdb",price:53e3},{producer:"Acura",year_of_production:2017,model:"TLX",horse_power:206,mileage_km:4e4,uuid:"9eb09cfa-e45b-4694-b9a6-bb106bfe5686",price:69e3},{producer:"Tesla",year_of_production:2018,model:"Model S",horse_power:503,mileage_km:2e4,uuid:"0f08869c-2ff2-479b-a08d-7595b97e23af",price:63e3},{producer:"Volvo",year_of_production:2016,model:"XC60",horse_power:250,mileage_km:6e4,uuid:"56e2f7cb-c4d8-4918-8e43-16db43044745",price:52e3},{producer:"Toyota",year_of_production:2017,model:"Rav4",horse_power:203,mileage_km:55e3,uuid:"47136e53-9d87-4b3b-9b91-80590fbb4c3a",price:62e3},{producer:"Honda",year_of_production:2016,model:"Fit",horse_power:130,mileage_km:65e3,uuid:"19ff1109-f82c-4149-8135-16e4fb93d663",price:66e3},{producer:"Ford",year_of_production:2018,model:"Escape",horse_power:179,mileage_km:45e3,uuid:"8b0f7890-b62a-46ef-9a3a-9a9e07741f11",price:54e3},{producer:"Chevrolet",year_of_production:2019,model:"Equinox",horse_power:170,mileage_km:4e4,uuid:"a285b5e4-c3c7-4e92-98b5-7a6ab50d0a04",price:46e3},{producer:"Nissan",year_of_production:2016,model:"Rogue",horse_power:170,mileage_km:6e4,uuid:"fdebd41b-6284-4c43-9625-fb5d268b04b5",price:55e3},{producer:"BMW",year_of_production:2015,model:"X5",horse_power:335,mileage_km:7e4,uuid:"9504b2ff-6fa7-4860-a4d1-d2f3de3c3fc9",price:64e3},{producer:"Audi",year_of_production:2017,model:"Q7",horse_power:333,mileage_km:5e4,uuid:"76ec1da3-4e4a-45a0-8dab-037485579601",price:54e3},{producer:"Mercedes-Benz",year_of_production:2016,model:"GLC",horse_power:241,mileage_km:55e3,uuid:"1354d6cd-b282-408d-9970-287327ddc4b0",price:57e3},{producer:"Volkswagen",year_of_production:2015,model:"Tiguan",horse_power:184,mileage_km:6e4,uuid:"7d9130d1-3d8a-4e9e-8265-fa6c4096af52",price:52e3},{producer:"Hyundai",year_of_production:2014,model:"Tucson",horse_power:164,mileage_km:8e4,uuid:"ce9ab6f4-6374-41f7-98f5-ec1b2347cc88",price:45e3},{producer:"Kia",year_of_production:2016,model:"Sportage",horse_power:181,mileage_km:75e3,uuid:"f3e15ad1-4e88-4a65-926f-07ba8285db1a",price:58e3},{producer:"Subaru",year_of_production:2015,model:"Outback",horse_power:175,mileage_km:7e4,uuid:"178a63f3-469f-4095-a1f3-e4d6b91f43bb",price:54e3},{producer:"Mazda",year_of_production:2014,model:"CX-5",horse_power:187,mileage_km:6e4,uuid:"4be21f8b-9b7c-45a3-8fc0-620c25138fe5",price:47e3},{producer:"Lexus",year_of_production:2015,model:"NX",horse_power:235,mileage_km:5e4,uuid:"152b8e1e-2c50-4c67-836d-47b1f7ee3278",price:56e3},{producer:"Infiniti",year_of_production:2014,model:"QX60",horse_power:295,mileage_km:6e4,uuid:"6e234ab7-1085-4fe6-b484-af640c205151",price:63e3},{producer:"Acura",year_of_production:2015,model:"MDX",horse_power:290,mileage_km:7e4,uuid:"51b31ff2-884d-47fb-8c99-3006b6b64a3c",price:69e3},{producer:"Tesla",year_of_production:2016,model:"Model X",horse_power:518,mileage_km:4e4,uuid:"9e368078-90da-48e5-8847-77a7344d7c5b",price:65e3},{producer:"Volvo",year_of_production:2018,model:"XC90",horse_power:316,mileage_km:3e4,uuid:"72f50430-cf1b-49b0-859a-3dc99f6da6fd",price:58e3}],r=(e,o,r)=>{o.innerHTML="";const a=e.filter((({producer:e,model:o})=>{if(r){const i=`${e} ${o}`.toLowerCase(),a=r.toLowerCase();return i.includes(a)}return!0}));0===a.length?o.insertAdjacentHTML("beforeend",'<div class="c-wrap info-container fade-in text-center">\n      <div>\n      <h2>Ooops...</h2>\n      <p>Brak wyników wyszukiwania</p>\n      </div>\n      <div>\n      <img src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=740&t=st=1714144035~exp=1714144635~hmac=c6c3438e8ba5a717cd7fb9ac6009b3450f28ea308ca5a8cf2caa4d0b8572f667" \n      class="img fade-in"\n      alt="Image by Freepik">\n      </div>\n      </div>'):a.forEach((({producer:e,year_of_production:r,model:a,horse_power:s,mileage_km:t,extras:c,uuid:d,price:p,img:n})=>{o.insertAdjacentHTML("beforeend",i(e,r,a,s,t,c,d,p,n))}))},i=(e,o,r,i,a,s,t,c,d)=>`\n    <div class="car" data-uuid=${t} data-extras="${s}" data-producer="${e}" data-model="${r}" data-hp="${i}" data-mileage="${a}" data-year="${o}">\n    <div class="car-img" style="width:100%;height:200px;background: url(${d??"https://placehold.co/600x400"});background-size: cover;background-position: center bottom">\n    \n    </div\n      <h1 class="car-name">${e}</h1>\n      <div class="car-model"><span class="bold">Model:</span> ${r}</div>\n      <div class="car-year"><span class="bold">Rok Produkcji:</span> ${o}</div>\n      <div class="car-power"><span class="bold">Moc:</span> ${i} HP</div>\n      <div class="car-mileage"><span class="bold">Przebieg:</span> ${a} km</div>\n      <div class="car-price"><span class="bold">Cena:</span> ${c}$</div>\n      <div id="buy" class="car-buy btn btn-buy bold">KUP</div>\n    </div>`,a="carFormOpen",s="searchInput",t="extrasID",c="formData",d=[{id:"A1b2",name:"Aluminiowe felgi",price:2e3},{id:"C3d4",name:"System nawigacji GPS",price:1500},{id:"E5f6",name:"System audio premium",price:2500},{id:"G7h8",name:"Kamera cofania",price:1e3},{id:"I9j0",name:"Podgrzewane fotele",price:1200},{id:"K1l2",name:"Dywaniki welurowe",price:500},{id:"M3n4",name:"Bagażnik dachowy",price:800},{id:"O5p6",name:"Alarm",price:600},{id:"Q7r8",name:"Folia ochronna na lakier",price:300},{id:"S9t0",name:"Ładowarka bezprzewodowa do telefonu",price:400}];class p{constructor(e=!0,o){this.$formContainer=document.querySelector("#c-form"),this.$form=document.querySelector("#form"),this.uuid=o,this.isOn=e,this.extras=[],this.firstName="",this.lastName="",this.money=!0,this.leasing=!1,this.date="",this.getDataOnLoad(),this.prepareDOM(),this.addExtras(),this.addDeliveryDate(),this.handleListeners(),this.handlePrice(),this.show()}getDataOnLoad=()=>{this.car=o.find((({uuid:e})=>this.uuid===e));const r=e.read(t);if(this.extras=r||[],e.read(c)){const[o,r,i,a,s]=e.read(c);this.firstName=o,this.lastName=r,this.money=i,this.leasing=a,this.date=s}};prepareDOM=()=>{const{producer:e,model:o,year_of_production:r,mileage_km:i,horse_power:a,price:s,img:t}=this.car;this.$form.innerHTML=((e,o,r,i,a,s,t,c,d,p,n)=>`\n  <div id="close" class="btn btn-close close c c-flex--center">x</div>\n<div id="form-content">\n    <div class="form-section form-flex">\n    <div>\n    <p class="header">${e} ${o}</p>\n    <p>Rok: ${r},</p>\n    <p>Przebieg: ${i}km,</p>\n    <p>Moc: ${a}HP</p>\n    <p class="bold">Cena: ${s}$</p>\n    </div>\n    <div>\n    <img class="car-img img" src="${n??"https://placehold.co/600x400"}" />\n    </div>\n    </div>\n    <form id="form">\n      <div class="form-section">\n        <label for="firstName">Imię:</label><br />\n        <input\n          class="input-field input"\n          type="text"\n          id="firstName"\n          maxlength="20"\n          name="firstName"\n          placeholder="Wprowadź Imię..."\n          value="${t}"\n          required\n        /><br />\n        <label for="secondName">Nazwisko:</label><br />\n        <input\n          class="input-field input"\n          type="text"\n          id="secondName"\n          maxlength="20"\n          name="secondName"\n          placeholder="Wprowadź Nazwisko..."\n          value="${c}"\n          required\n        /><br />\n      </div>\n      <div class="form-section">\n        <label for="financing">Wybierz finansowanie:</label><br />\n        <input\n          class="input-field"\n          type="radio"\n          id="cash"\n          name="financing"\n          value="gotówka"\n          ${d?"checked":""}\n        />\n        <label for="cash">Gotówka</label><br />\n        <input\n          class="input-field"\n          type="radio"\n          id="leasing"\n          name="financing"\n          value="leasing"\n          ${p?"checked":""}\n\n        />\n        <label for="leasing">Leasing</label><br />\n      </div>\n\n      <div class="form-section" id="extras"><p>Dodatkowe wyposażenie:</p></div>\n\n      <div class="form-section">\n        <label for="deliveryDate">Data dostawy:</label><br />\n        <select class="input-field" id="deliveryDate" name="deliveryDate">\n        </select>\n      </div>\n      <div class="form-section" id="price">\n      \n      </div>\n      <div class="form-section">\n      <button class="btn btn-send" type="submit">ZAMÓW</button>\n      </div>\n      </div>\n\n      <div class="close close-bottom"><p class="mt-50"><<< Powrót do listy</p></div>\n    </form>`)(e,o,r,i,a,s,this.firstName,this.lastName,this.money,this.leasing,t),this.$formContent=document.querySelector("#form-content"),this.$formBtnClose=document.querySelectorAll(".close"),this.$submitForm=document.querySelector("#form"),this.$inputs=document.querySelectorAll(".input-field"),this.$deliveryDateSelect=document.querySelector("#deliveryDate"),this.$extras=document.querySelector("#extras"),this.$price=document.querySelector("#price")};handleListeners=()=>{this.$formBtnClose.forEach((o=>o.addEventListener("click",(()=>{e.write(a,{isOn:!1,uuid:this.car.uuid}),this.$formContainer.classList.toggle("d-none"),this.clear()})))),this.$submitForm.addEventListener("submit",(o=>{o.preventDefault(),e.clear();const{producer:r,model:i,year_of_production:a,mileage_km:s,horse_power:t,price:c,img:p}=this.car;this.$formContent.innerHTML=((e,o,r,i,a,s,t,c,d)=>`\n  <p class="header">Dziękujemy za Zakup!</p>\n  <p class="">Podsumowanie:</p>\n  <div class="form-section form-flex">\n  <div>\n  <p class="header">${e} ${o}</p>\n  <p>Rok: ${r},</p>\n  <p>Przebieg: ${i}km,</p>\n  <p>Moc: ${a}HP</p>\n  <p>Data dostawy: ${s}</p>\n  <p>Opłata: ${t?"Gotówka":"Leasing"}</p>\n  <p class="bold">Cena: ${c}$</p>\n  </div>\n  <div>\n      <img class="car-img img" src="${d??"https://placehold.co/600x400"}" />\n  </div>\n  </div>\n  <div class="form-section form-flex">\n  <p>Dodatkowe Wyposażenie:</p>\n  </div>\n  `)(r,i,a,s,t,this.date,this.money,c,p),0===this.extras.length?this.$formContent.insertAdjacentHTML("beforeend",'<div class="extra">\n              <p>Brak dodatkowego wyposażenia</p>\n          </div>'):d.forEach((({id:e,name:o,price:r})=>{this.extras.includes(e)&&this.$formContent.insertAdjacentHTML("beforeend",`<div data-id="${e}" data-price="${r}" class="extra">\n                    <p>${o}</p><p class="extra-price">+${r}$</p>\n                    </div>`)}))})),this.$submitForm.addEventListener("change",(()=>{const[o,r,i,a,s]=[...this.$inputs];this.firstName=o.value,this.lastName=o.value,this.money=i.checked,this.leasing=a.checked,this.date=s.value;const t=[o.value,r.value,i.checked,a.checked,s.value];e.write(c,t)})),this.$extra=document.querySelectorAll(".extra"),this.$extra.forEach((o=>{o.addEventListener("click",(o=>{o.currentTarget.classList.toggle("extra-pick");const r=o.currentTarget.dataset.id;if(this.extras.includes(r)){const e=this.extras.filter((e=>e!==r));this.extras=e}else this.extras.push(r);e.write(t,this.extras),this.handlePrice()}))}))};addDeliveryDate=()=>{const e=new Date;for(let o=0;o<14;o++){const r=new Date(e);r.setDate(r.getDate()+o);const i=document.createElement("option");i.text=r.toLocaleDateString();const a=r.toISOString().split("T")[0];i.value=a,a===this.date&&i.setAttribute("selected",!0),this.$deliveryDateSelect.add(i)}};addExtras=()=>{d.forEach((({id:e,name:o,price:r})=>{const i=this.extras.includes(e);this.$extras.insertAdjacentHTML("beforeend",`<div data-id="${e}" data-price="${r}" class="extra ${i?"extra-pick":""}"><p>${o}</p><p class="extra-price">+${r}$</p></div>`)}))};handlePrice=()=>{const e=this.car.price+this.extras.map((e=>d.find((({id:o})=>o===e)))).map((({price:e})=>e)).reduce(((e,o)=>e+o),0);this.totalPrice=e,this.$price.innerHTML=`<p>Łączna kwota: <strong>${e}</strong>$</p>`};show=()=>{!0===this.isOn&&this.$formContainer.classList.toggle("d-none")};clear=()=>{this.$form.innerHTML=""}}const n=!!e.read(a)&&e.read(a),m=e.read(s),l=document.querySelector("#cars"),u=document.querySelector("#filter");var f,h,g;n.isOn&&new p(!0,n.uuid),m?(u.value=m,r(o,l,m)):r(o,l),l.addEventListener("click",(o=>{if("buy"===o.target.id){const{uuid:r}=o.target.parentElement.dataset;e.write(a,{isOn:!0,uuid:r}),new p(!0,r)}})),u.addEventListener("input",(i=>{const a=i.target.value;e.write(s,a),r(o,l,a)})),f=function(){alert("Congratulations!")},h="",g="38384040373937396665",document.addEventListener("keydown",(function(e){if((h+=""+e.keyCode)===g)return f();g.indexOf(h)&&(h=""+e.keyCode)}))})();