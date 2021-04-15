const getFilterData = (newUrl) => {
  return fetch(newUrl).then((response) => response.json());
};

export default getFilterData;
