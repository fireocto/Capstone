import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/restaurants/:location", async (request, response) => {
  try {
    const location = request.params.location;
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?sort_by=best_match&location=${location}&radius=8046&term=restaurants&open_now=true`,
        {
          headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
          }
        }
      )
      .then(yelpResponse => {
        response.json(yelpResponse.data.businesses);
      })
      .catch(error => {
        console.log("It puked", error);
        response.status(500).json(error);
      });
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.get(
  "/restaurants/:location/:radius/:style/",
  async (request, response) => {
    try {
      const location = request.params.location;
      const radius = request.params.radius;
      const style = request.params.style;

      axios
        .get(
          `https://api.yelp.com/v3/businesses/search?sort_by=best_match&location=${location}&radius=${radius}&term=restaurants&open_now=true&categories=${style}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.YELP_API_KEY}`
            }
          }
        )
        .then(yelpResponse => {
          // function getMiles(meters) {
          //   return meters * 0.000621371192;
          // }
          // console.log(getMiles);
          response.json(yelpResponse.data.businesses);
        })
        .catch(error => {
          console.log("It puked", error);
          response.status(500).json(error);
        });
    } catch (error) {
      console.log(error);

      return response.status(500).json(error.errors);
    }
  }
);
export default router;
