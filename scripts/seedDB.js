const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tacolist");

const tacoSeed = [
  {
    taco_id: "2sdsas31312",
    user_id: "dcs23dsads23",
    taco_type: "soggy taco",
    review: "toilet taco",
    restaurant: "chuys",
    rating: "3",
    taco_photo: "https://media.gettyimages.com/photos/soft-beef-tacos-with-fries-picture-id614313140?s=612x612",
    location: "some chuys",
    lat: 30.201,
    lng: -97.879981,
    date: new Date(Date.now())
  }, {
    taco_id: "ew55eew312",
    user_id: "23dsadwes23",
    taco_type: "trash taco",
    review: "it was my birthday....",
    restaurant: "la basura tacos",
    rating: "5",
    taco_photo: "https://www.eatingonadime.com/wp-content/uploads/2018/05/street-tacos-square.jpg",
    location: "eastside",
    lat: 30.4689,
    lng: -97.595573,
    date: new Date(Date.now())
  }, {
    taco_id: "5hjkjh454545",
    user_id: "23dsadwes23",
    taco_type: "possum taco",
    review: "when in Austin ....",
    restaurant: "el marsupial #2",
    rating: "2",
    taco_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUGsiicGUlz2Tr5q7fzeWGBZIcqZB8_pqizggoUGnRZ8h5lB-VA",
    location: "riverside",
    lat: 30.383457,
    lng: -97.770789,
    date: new Date(Date.now())
  }
];

db.Tacos
  .remove({})
  .then(() =>
    db.Tacos.collection.insertMany(tacoSeed))
  .then(data => {
    console.log(data.result.n + "taco records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const userSeed = [
  {
    email: 'john@email.com',
    password: 'password1',
    role: 'Client'

  }, {
    email: 'beamer@email.com',
    password: 'password2',
    role: 'Client'
  }, {
    email: 'kelly@email.com',
    password: 'password3',
    role: 'Client'
  }
];

db.User
  .remove({})
  .then(() =>
    db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });