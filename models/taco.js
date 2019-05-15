const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tacoSchema = new Schema({
  tacoName: {
    type: String,
    required: true
  },
  tacoUser: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  garnish: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;