import html from "html-literal";
// import { Wheel } from "https://cdn.jsdelivr.net/npm/spin-wheel@4.3.1/dist/spin-wheel-esm.js";

export default state => html`
  <section id="pick">
    <h2>Pick!</h2>
    <section id="pickMenu">
    <div class="pickMenu">
      <input type="text" name="style" placeholder="Style of Food">
      <input type="text" name="location" placeholder="Your Location">
      <input type="number" name="radius" placeholder="How Far Away">
      <button id="search-button">Search</button>
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

  <div id="gui-wrapper">
    <p>Click-drag (or flick) to spin the wheel.</p>
  </div>

  <div id="wheel-wrapper"></div>

  <div id="spin-it">
    Spin It!
  </div>
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
