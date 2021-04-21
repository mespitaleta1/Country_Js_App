const Modal = (countryData) => {
  return `
        <div class="body-modal">
           <span>Domain: ${countryData.topLevelDomain}</span>
            <span>Acronym: ${countryData.alpha3Code}</span>
            <span>Full name: ${countryData.altSpellings[0]}</span>
            <span>Language: ${countryData.languages[0]["name"]}</span>
            <span>Subregion: ${countryData.subregion}</span>
            <span>Population: ${countryData.population}</span>
            <span>Border with: ${countryData.borders}</span>         
        </div>
    `;
};

export default Modal;
