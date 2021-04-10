const Card = (countryData) => {
  const getTemplateCard = (obj) => `
        <div class="main-card">
            <h3 class="country-card_name">${obj.name}</h3> 
            <img src="${obj.flag}"/>
        </div>`;

  const cardView = countryData.map((item) => {
    return getTemplateCard(item);
  });

  return cardView;
};
export default Card;
