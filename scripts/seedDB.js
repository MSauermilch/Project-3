const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tacolist");

const tacoSeed = [{}, {}, {}
];

db.Taco
  .remove({})
  .then(() =>
    db.Taco.collection.insertMany(tacoseed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });