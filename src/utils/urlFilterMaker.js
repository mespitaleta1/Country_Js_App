const BASE_API_URL = "https://restcountries.eu/rest/v2/";

const allCountries = "all/";
const lang = "lang/";
const continent = "region/";
const name = "name/";
const capital = "capital/";
const call = "callingCode/";

const makeUrl = (filter) => {
  let useApi = "";
  if (filter === "language") {
    useApi = `${BASE_API_URL}${lang}`;
  } else if (filter === "continent") {
    useApi = `${BASE_API_URL}${continent}`;
  } else if (filter === "name") {
    useApi = `${BASE_API_URL}${name}`;
  } else if (filter === "capital") {
    useApi = `${BASE_API_URL}${capital}`;
  } else if (filter === "callCode") {
    useApi = `${BASE_API_URL}${call}`;
  } else {
    useApi = `${BASE_API_URL}${allCountries}`;
  }
  return useApi;
};

export default makeUrl;
