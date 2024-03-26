import html from "html-literal";

export default state => html`
  <h2>Pick!</h2>
  <section id="pick">
    <div id="restaurants">
      ${state.restaurants
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
        .join("")}
    </div>
  </section>
`;

//   <!-- <section id="restaurantType">
//     <div class="filter">
//       <select name="" id="">
//         <option value="Italian"></option>
//         <option value="Mexican"></option>
//         <option value="American"></option>
//         <option value="Bakeries"></option>
//         <option value="Vegan"></option>
//         <option value="Coffee"></option>
//       </select>
//       <input type="search" name="filter" id="filter" />
//       <button id="search-button">Search</button>
//     </div>
//   </section>
// `; -->
// <!-- this is where the wheel goes -->
// spinner wheel working code

// const props = {
//   items: [
//     {
//       label: "one"
//     },
//     {
//       label: "two"
//     },
//     {
//       label: "three"
//     }
//   ]
// };
