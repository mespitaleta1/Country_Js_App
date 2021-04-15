const filterForm = () => {
  const filters = `
        <form>
        <label><input type="checkbox" class="lang-field" value="language"/>  Language</label>
        <label><input type="checkbox" class="region-field" value="continent"/> Continent</label>
        <label><input type="checkbox" class="name-field" value="name"/>      Name</label>
        <label><input type="checkbox" class="capital-field" value="capital"/>   Capital city</label>
        <label><input type="checkbox" class="call-field" value="callCode"/>  Calling code</label>

        <input class="filter-txt" type="text" />

        <div class="filter-btns">
            <input  class="filter-btn apply" type="button" value="Filter"/>
            <input  class="filter-btn clean" type="button" value="Clean"/>
        </div>
        </form>
    `;
  return filters;
};

export default filterForm;
