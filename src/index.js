import Card from "./template/Card";
import filterForm from "./utils/filter.js";
import getData from "./utils/getData.js";
import makeUrl from "./utils/urlFilterMaker.js";
import Modal from "./template/modal.js";

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

const modalContainer = document.createElement("div");
modalContainer.setAttribute("class", "modal-container");

App.append(mainTitle, wrapper, modalContainer);
wrapper.append(filter, container);

render();

const searchInput = filter.querySelector("input.filter-txt");
const applyBtn = filter.querySelector("input.apply");
const clearBtn = filter.querySelector("input.clean");

//getting the filters:
const filters = filter.querySelectorAll("input.filter");

applyBtn.addEventListener("click", function showFilterValue() {
  let filterUrl;
  let finalFilterUrl;
  let TextValue = searchInput.value;

  filters.forEach((filter) => {
    if (filter.checked) {
      let filterValue = filter.value;
      filterUrl = makeUrl(filterValue);
      finalFilterUrl = `${filterUrl}${TextValue}`;
      return finalFilterUrl;
    }
    render(finalFilterUrl);
  });
});

clearBtn.addEventListener("click", function cleanFilter() {
  searchInput.value = "";
  filters.forEach((filter) => {
    if (filter.checked) {
      filter.checked = false;
    }
  });

  render();
});

function render(filterUrl) {
  getData(filterUrl)
    .then((data) => {
      container.innerHTML = Card(data).join(" ");

      let countryCard = container.querySelectorAll("div.main-card");

      countryCard.forEach((card) => {
        card.addEventListener("click", (e) => {
          let countryName = e.currentTarget.children[0].innerText;
          const countryData = data.find((item) => item.name === countryName);
          const bodyModal = Modal(countryData);
          console.log(bodyModal);
          modalContainer.innerHTML = bodyModal;
          modalContainer.classList.add("visible");

          const closeModal = modalContainer.querySelector("button.close-modal");

          closeModal.addEventListener("click", () => {
            modalContainer.classList.remove("visible");
          });
        });
      });
    })
    .catch((e) => console.log(e));
}
