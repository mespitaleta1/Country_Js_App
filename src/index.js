import Card from "./template/Card";
import getData from "./utils/getData.js";

const App = document.querySelector("#App");

const mainTitle = document.createElement("div");
mainTitle.classList.add("main-title");
mainTitle.textContent = "country app";

const container = document.createElement("div");
container.setAttribute("class", "content-app");

getData()
  .then((data) => {
    container.innerHTML = Card(data);
  })
  .catch((e) =>
    console.log(e)
  ); /*data = [{name: "colombia", flag: "http:/#", currencies: []}...];*/

App.append(mainTitle, container);
