import Card from "./template/Card";
import filterForm from "./utils/filter.js";
import getData from "./utils/getData.js";

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

getData()
  .then((data) => {
    container.innerHTML = Card(data).join(" ");
  })
  .catch((e) =>
    console.log(e)
  ); /*data = [{name: "colombia", flag: "http:/#", currencies: []}...];*/

App.append(mainTitle, wrapper);
wrapper.append(filter, container);
