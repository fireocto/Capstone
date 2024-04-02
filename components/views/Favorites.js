import html from "html-literal";

export default state => html`
  <section id="favorites">
    <h2>Our Favorite Spots!</h2>
    <div class="filter">
      <select name="favoritesMenu" id="favoritesMenu">
        <option value="">What do you feel like?</option>
        <option value="bar">Bar</option>
        <option value="Mexican">Mexican</option>
        <option value="pizza">Pizza</option>
        <option value="american">American</option>
        <option value="sandwiches">Sandwiches</option>
        <option value="thai">Thai</option>
      </select>
      <button id="search-button">Search</button>
    </div>
  </section>
  <div id="favorites"
  ${state.favorites
    .map(favorites => {
      return html`
        <div>
          ${favorites.value}
        </div>
      `;
    })
    .join("")}
`;
