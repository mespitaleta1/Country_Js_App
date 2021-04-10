const API_URL = "https://restcountries.eu/rest/v2/all/";

const getData = () => {
  return fetch(API_URL).then((response) => response.json());
};

export default getData;
