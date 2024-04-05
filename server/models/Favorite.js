import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: /^[A-Za-z0-9 '&]*$/
  },
  category: {
    type: Object
  },
  location: {
    type: Object
  },
  rating: {
    type: Number
  }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
