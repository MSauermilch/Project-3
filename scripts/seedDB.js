const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tacolist");

const tacoSeed = [
  {
    taco_id: "2sdsas31312",
    user_id: "dcs23dsads23",
    tacoType: "soggy taco",
    review: "toilet taco",
    restaurant: "chuys",
    rating: "3",
    tacoPhoto: "https://media.gettyimages.com/photos/soft-beef-tacos-with-fries-picture-id614313140?s=612x612",
    location: "some chuys",
    date: new Date(Date.now())
  }, {
    taco_id: "ew55eew312",
    user_id: "23dsadwes23",
    tacoType: "trash taco",
    review: "it was my birthday....",
    restaurant: "la basura tacos",
    rating: "5",
    tacoPhoto: "https://www.eatingonadime.com/wp-content/uploads/2018/05/street-tacos-square.jpg",
    location: "eastside",
    date: new Date(Date.now())
  }, {
    taco_id: "5hjkjh454545",
    user_id: "23dsadwes23",
    tacoType: "possum taco",
    review: "when in Austin ....",
    restaurant: "el marsupial #2",
    rating: "2",
    tacoPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUGsiicGUlz2Tr5q7fzeWGBZIcqZB8_pqizggoUGnRZ8h5lB-VA",
    location: "riverside",
    date: new Date(Date.now())
  },

];

db.Taco
  .remove({})
  .then(() =>
    db.Taco.collection.insertMany(tacoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });