import html from "html-literal";

export default state => html`
  <section id="pick">
    <h2>Pick!</h2>
    <section id="pickMenu">
      <div class="pickMenu">
        <form action="" method="post">
          <input
            type="text"
            name="categories"
            placeholder="Style of Food"
            required
          />
          <input type="text" name="location" placeholder="City" required />
          <input
            type="number"
            name="radius"
            placeholder="How Far Away (miles)"
            required
          />
          <button type="submit" id="search-button">Search</button>
        </form>
        <!-- <div id="restaurants"> -->
        <!-- ${state.restaurants
          .map(
            restaurant =>
              html`
                <div>
                  ${restaurant.name}
                </div>
                <div>
                  ${restaurant.location.display_address}
                </div>
              `
          )
          .join("")} -->
      </div>
    </section>

    <!-- <div id="gui-wrapper">
    <p>Click-drag (or flick) to spin the wheel.</p>
  </div> -->
    <!-- put pop up here -->

    ${state.selection
      .map(
        item => html`
          <div>${item.name} ${item.location.display_address}</div>
        `
      )
      .join("")}

    <div id="wheel-wrapper"></div>

    <div id="spin-it">
      Spin It!
    </div>
  </section>
`;
