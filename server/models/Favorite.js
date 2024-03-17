import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  style: {
    type: String,
    required: true
  },
  toGo: {
    type: Boolean,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
