import Card from "./template/Card";
import filterForm from "./utils/filter.js";
import getData from "./utils/getData.js";
import makeUrl from "./utils/urlFilterMaker.js";
import getFilterData from "./utils/getFilterData.js";

const App = document.querySelector("#App"); //getting the div element to the HTML

const mainTitle = document.createElement("div"); //creating a new div inside the App div in the HTML, who contain the title of the APP.
mainTitle.classList.add("main-title");
mainTitle.textContent = "country app";

const wrapper = document.createElement("div"); //creating a second div who will contain the body of the app -the filter and the country cards.
wrapper.className = "wrapper";

const container = document.createElement("div"); //this new diw will contain the render content cards.
container.setAttribute("class", "content-app");

const filter = document.createElement("div"); //this other div will contain the filter section with the respectives inputs.
filter.setAttribute("class", "filter-section");
filter.innerHTML = filterForm();

const searchInput = filter.querySelector("input.filter-txt");
const applyBtn = filter.querySelector("input.apply");
const cleanBtn = filter.querySelector("input.clean");

//getting each of the filters:
const lang = filter.querySelector("input.lang-field");
const continent = filter.querySelector("input.region-field");
const name = filter.querySelector("input.name-field");
const capital = filter.querySelector("input.capital-field");
const call = filter.querySelector("input.call-field");

getData()
  .then((data) => {
    /*data = [{name: "colombia", flag: "http:/#", currencies: []}...];*/
    container.innerHTML = Card(data).join(" ");
  })
  .catch((e) => console.log(e));

applyBtn.addEventListener("click", function showValue() {
  let newFilterUrl = "";
  let inputValue = searchInput.value;

  if (lang.checked) {
    let filterValue = lang.value;
    let url = makeUrl(filterValue);
    newFilterUrl = `${url}${inputValue}`;
    return newFilterUrl;
  } else if (continent.checked) {
    let filterValue = continent.value;
    let url = makeUrl(filterValue);
    newFilterUrl = `${url}${inputValue}`;
    return newFilterUrl;
  } else if (name.checked) {
    let filterValue = name.value;
    let url = makeUrl(filterValue);
    newFilterUrl = `${url}${inputValue}`;
    return newFilterUrl;
  } else if (capital.checked) {
    let filterValue = capital.value;
    let url = makeUrl(filterValue);
    newFilterUrl = `${url}${inputValue}`;
    return newFilterUrl;
  } else if (call.checked) {
    var filterValue = call.value;
    var url = makeUrl(filterValue);
    newFilterUrl = `${url}${inputValue}`;
    return newFilterUrl;
  }

  /*getFilterData(newFilterUrl)
    .then((data) => {
      container.innerHTML = Card(data).join(" ");
    })
    .catch((e) => console.log("This is not workin"));*/
});

//console.log(getFilterData());

App.append(mainTitle, wrapper);
wrapper.append(filter, container);
