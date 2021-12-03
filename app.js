const arrNames = ["Matias", "Florencia", "Esteban", "Joaquin", "Micaela"];
const arrBrands = ["Adidas", "Volkswagen", "Samsung", "LG", "Chevrolet"];
const arrCities = ["Londres", "Paris", "Los Angeles", "Buenos Aires", "Sidney"];

class Events {
  constructor(arrType, btn) {
    this.arrType = arrType;
    this.btn = btn;
  }

  addList() {
    let container = document.querySelector(".container");
    this.btn.addEventListener("click", () => {
      this.arrType.forEach((name) => {
        let list = document.createElement("li");
        list.textContent = name;
        list.classList.add("list");
        container.appendChild(list);

        setTimeout(() => {
          container.removeChild(list);
        }, 4000);
      });
    });
  }
}

const eventNames = new Events(
  arrNames,
  (btn = document.querySelector("#names"))
);
eventNames.addList();

const eventBrand = new Events(
  arrBrands,
  (btn = document.querySelector("#brands"))
);

eventBrand.addList();

const eventCities = new Events(
  arrCities,
  (btn = document.querySelector("#cities"))
);

eventCities.addList();
