const filterForm = () => {
  const filters = `
        <form>
        <label> Language <input type="checkbox" value="language"/></label>
        <label> Continent <input type="checkbox" value="continent"/></label>
        <label> Name  <input type="checkbox" name="name"/></label>
        <label> Capital city <input type="checkbox" value="capital"/></label>
        <label> Calling code <input type="checkbox" value="callCode"/></label>

        <input class="filter-txt" type="text" />

        <div class="filter-btns">
            <input  class="filter-btn" type="button" value="Apply"/>
            <input  class="filter-btn" type="button" value="Clean"/>
        </div>
        </form>
    `;
  return filters;
};

export default filterForm;
