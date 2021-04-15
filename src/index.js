import Card from "./template/Card";
import filterForm from "./utils/filter.js";
import getData from "./utils/getData.js";
import makeUrl from "./utils/getFilterData.js";

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

const searchInput = filter.querySelector("input.filter-txt"); //getting the input elem in the DOM of the filter section.
const applyBtn = filter.querySelector("input.apply"); //getting the input filter-btn elem in the DOM of the filter section.
const cleanBtn = filter.querySelector("input.clean"); //getting the input clean-btn elem in the DOM of the filter section.
const lang = filter.querySelector("input.lang-field"); //getting all the inputs of the filter section.
const call = filter.querySelector("input.call-field");
const name = filter.querySelector("input.name-field");

getData()
  .then((data) => {
    /*data = [{name: "colombia", flag: "http:/#", currencies: []}...];*/
    container.innerHTML = Card(data).join(" ");
  })
  .catch((e) => console.log(e));

applyBtn.addEventListener("click", function showValue() {
  let newFilterUrl = "";
  if (lang.checked) {
    var inputValue = searchInput.value;
    var filterValue = lang.value;
    var url = makeUrl(filterValue);
    newFilterUrl = `${url}${inputValue}`;
    return console.log(newFilterUrl);
  } else if (name.checked) {
    var inputValue = searchInput.value;
    var filterValue = name.value;
    var url = makeUrl(filterValue);
    newFilterUrl = `${url}${inputValue}`;
    return newFilterUrl;
  } else if (call.checked) {
    var inputValue = searchInput.value;
    var filterValue = call.value;
    var url = makeUrl(filterValue);
    newFilterUrl = `${url}${inputValue}`;
    return console.log(newFilterUrl);
  }
});

//console.log(getFilterData());

App.append(mainTitle, wrapper);
wrapper.append(filter, container);
