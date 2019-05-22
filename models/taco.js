const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tacoSchema = new Schema({
  taco_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  taco_type: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  restaurant: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  taco_photo: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Taco = mongoose.model("Taco", tacoSchema);

module.exports = Taco;



