import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h2>Dinner Spinner</h2>
    <a href="index.html">"Take It For A Spin!" "Button"</a>
  </section>

  <h3>
    The weather in ${state.weather.city}: ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
