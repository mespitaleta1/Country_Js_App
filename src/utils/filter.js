const filterForm = () => {
  const filters = `
        <form>
        <label><input type="checkbox" class="filter" value="lang/"/>     Language</label>
        <label><input type="checkbox" class="filter" value="region/"/>  Continent</label>
        <label><input type="checkbox" class="filter" value="name/"/>    Name</label>
        <label><input type="checkbox" class="filter" value="capital/"/> Capital city</label>
        <label><input type="checkbox" class="filter" value="callingcode/"/> Calling code</label>

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
