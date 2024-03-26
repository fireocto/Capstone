import html from "html-literal";
import { Links } from "../../store";

export default state => html`
  <section id="suggestions">
    <ul>
      ${state.restaurants
        .map(
          restaurants =>
            html`
              <li>${restaurants.name}</li>
            `
        )
        .join("")}
    </ul>
  </section>
`;
