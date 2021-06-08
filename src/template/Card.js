const Card = (countryData) => {
  const getTemplateCard = (obj) => `
        <div  id="card" class="main-card">
            <h3 class="country-card_name">${obj.name}</h3> 
            <span class="country-card_capital">${obj.capital}</span>
            <div class="country-card_content">
              <img class="country-card_flag" src="${obj.flag}"/>

              <div class="country-card_info">
                <span class="region"><img src="https://i.imgur.com/F8PsJdu.png"/>${obj.region}</span>
                <span class="lang"><img src="https://i.imgur.com/A85woq6.png"/>${obj.languages[0]["iso639_2"]}</span>
                <span class="currency"><img src="https://i.imgur.com/KdvpkCA.png"/>${obj.currencies[0].code}</span>
              </div>
           </div>
        </div>`;

  const cardView = countryData.map((item) => {
    return getTemplateCard(item);
  });

  return cardView;
};
export default Card;
