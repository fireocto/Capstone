import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h2>Try One of Our Favorites - Click The Wheel To Spin!</h2>
    <a id="takeToPick" href="/Pick">Or Find a New Favorite!</a>
  </section>

  <div id="wheel-wrapper"></div>

  <div id="spin-it">
    Spin It!
  </div>

  <h3>
    The weather in ${state.weather.city}: ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
