const API_URL = "https://restcountries.eu/rest/v2/all/";

const getData = (url = API_URL) => {
  return fetch(url).then((response) => response.json());
};

export default getData;
