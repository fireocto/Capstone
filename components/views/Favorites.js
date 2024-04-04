import html from "html-literal";

export default state => html`
  <section id="favorites">
    <h2>Our Favorite Spots!</h2>
    <div class="filter">
      <select name="favoritesMenu" id="favoritesMenu">
        <option value="">What do you feel like?</option>
        <!-- <option value="bar">Bar</option> -->
        <option value="Mexican">Mexican</option>
        <option value="Pizza">Pizza</option>
        <!-- <option value="Sushi-Bar">Sushi</option> -->
        <option value="Sandwiches">Sandwiches</option>
        <option value="Thai">Thai</option>
      </select>
      <button id="search-button">Search</button>
    </div>
  </section>
  <div id="favorites"
  ${state.favorites
    .map(favorites => {
      return html`
        <div>
          ${favorites.name}
        </div>
        <div>
          ${favorites.location}
        </div>
      `;
    })
    .join("")}
`;
