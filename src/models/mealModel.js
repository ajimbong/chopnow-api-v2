/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require("mongoose");

const {Schema} = mongoose;
const MealSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  cloudinary_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Meal", MealSchema);
