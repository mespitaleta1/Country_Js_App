const BASE_API_URL = "https://restcountries.eu/rest/v2/";

const makeUrl = (filterField) => {
  return `${BASE_API_URL}${filterField}`;
};

export default makeUrl;
