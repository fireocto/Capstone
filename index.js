import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { Wheel } from "spin-wheel/dist/spin-wheel-esm";
import overlay from "./assets/img/overlay.svg";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Favorites") {
    document
      .getElementById("search-button")
      .addEventListener("click", event => {
        event.preventDefault();

        const column = document.getElementById("favoritesMenu").value;
        // const filter = document.getElementById("filter").value;

        axios
          .get(`${process.env.DINNER_SPINNER_API}/favorites?style=${column}`)
          .then(response => {
            console.log(response.data);
            store.Favorites.favorites = response.data;
            router.navigate("/favorites");
          })
          .catch(error => {
            console.log("It puked", error);
          });
      });
  }
  if (state.view === "Pick") {
    const props = {
      isInteractive: false,
      pointerAngle: 90,
      overlayImage: overlay,
      itemBackgroundColors: [
        "#33658A",
        "#86BBD8",
        "#758E4F",
        "#F6AE2D",
        "#F26419"
      ],
      items: []
    };

    state.restaurants.forEach(restaurant => {
      props.items.push({
        label: restaurant.name
      });
    });

    const container = document.querySelector("#wheel-wrapper");

    const wheel = new Wheel(container, props);

    wheel.onRest = event => {
      console.log(event);

      console.log(state.restaurants[event.currentIndex]);
      store.Pick.selection = [];
      store.Pick.selection.push(state.restaurants[event.currentIndex]);
      console.log(store.Pick.selection);
      router.navigate("/pick");
      alert(
        state.restaurants[event.currentIndex].name +
          "\n" +
          state.restaurants[event.currentIndex].location.display_address
      );
    };

    document
      .querySelector("#wheel-wrapper canvas")
      .addEventListener("click", event => {
        event.preventDefault();

        // Generate a random number between 250 and 400
        // Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        const spinRate = Math.floor(Math.random() * 151 + 200);
        console.log("matsinet-index.js:61-spinRate:", spinRate);
        wheel.spin(spinRate);
      });

    document.getElementById("spin-it").addEventListener("click", event => {
      event.preventDefault();

      const spinRate = Math.floor(Math.random() * 151 + 200);
      console.log("matsinet-index.js:61-spinRate:", spinRate);
      wheel.spin(spinRate);
    });

    document.getElementById("#pickMenu").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        style: inputList.style.value,
        location: inputList.location.value,
        radius: inputList.radius.value
      };
      console.log(requestData);
    });

    // axios
    //   .get(`${process.env.DINNER_SPINNER_API}/yelp/restaurants`, requestData)
    //   .then(response => {
    //     console.log(response.data);
    //     // store.Favorites.favorites = response.data;
    //     router.navigate("/picks");
    //   })
    //   .catch(error => {
    //     console.log("It puked", error);
    //   });
    // });
  }

  // document
  // .querySelector("#pickMenu")
  // .addEventListener("click", event => {
  //   event.preventDefault();

  //   axios
  //       .get(`${process.env.DINNER_SPINNER_API}/favorites?style=${column}`)
  //       .then(response => {
  //         console.log(response.data);
  //         store.Favorites.favorites = response.data;
  //         router.navigate("/favorites");
  //       })
  //       .catch(error => {
  //         console.log("It puked", error);
  //       });

  // });
}

router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    // const view =
    //   params && params.data && params.data.view
    //     ? capitalize(params.data.view)
    //     : "Home";
    let view = "Home";
    if (params && params.data && params.data.view) {
      view = capitalize(params.data.view);
    }
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=nashville`
          )
          .then(response => {
            console.log(response);
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          });
        // axios
        //   .get(`${process.env.DINNER_SPINNER_API}/yelp/restaurants/nashville`)
        //   .then(response => {
        //     // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
        //     console.log("response", response);

        //     store.Pick.restaurants = response.data;

        //     done();
        //   })
        //   .catch(error => {
        //     console.log("It puked", error);
        //     done();
        //   });
        break;
      case "Pick":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.DINNER_SPINNER_API}/yelp/restaurants`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);

            store.Pick.restaurants = response.data;

            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;

      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
