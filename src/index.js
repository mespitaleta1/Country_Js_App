import Card from "./template/Card";
import filterForm from "./utils/filter.js";
import getData from "./utils/getData.js";
import makeUrl from "./utils/urlFilterMaker.js";
import getFilterData from "./utils/getFilterData.js";

const App = document.querySelector("#App");

const mainTitle = document.createElement("div");
mainTitle.classList.add("main-title");
mainTitle.textContent = "country app";

const wrapper = document.createElement("div");
wrapper.className = "wrapper";

const container = document.createElement("div");
container.setAttribute("class", "content-app");

const filter = document.createElement("div");
filter.setAttribute("class", "filter-section");
filter.innerHTML = filterForm();

App.append(mainTitle, wrapper);
wrapper.append(filter, container);

const searchInput = filter.querySelector("input.filter-txt");
const applyBtn = filter.querySelector("input.apply");
const clearBtn = filter.querySelector("input.clean");

//getting the filters:
const filters = filter.querySelectorAll("input.filter");

getData()
  .then((data) => {
    container.innerHTML = Card(data).join(" ");
  })
  .catch((e) => console.log(e));

applyBtn.addEventListener("click", function showFilterValue() {
  let filterUrl;
  let finalFilterUrl;
  let TextValue = searchInput.value;

  filters.forEach((filter) => {
    if (filter.checked) {
      let filterValue = filter.value;
      filterUrl = makeUrl(filterValue);
      finalFilterUrl = `${filterUrl}${TextValue}`;
      console.log(finalFilterUrl);
      return finalFilterUrl;
    }

    getFilterData(finalFilterUrl)
      .then((data) => {
        container.innerHTML = Card(data).join(" ");
      })
      .catch((e) => console.log(e));
  });
});

clearBtn.addEventListener("click", function clean() {
  searchInput.value = "";
  filters.forEach((filter) => {
    if (filter.checked) {
      filter.checked = false;
    }
  });

  getData()
    .then((data) => {
      container.innerHTML = Card(data).join(" ");
    })
    .catch((e) => console.log(e));
});
