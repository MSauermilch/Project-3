const express = require("express");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
// var config = require('./config/.env');
var config = require('./config/main');
var User = require('./models/user');
const router = require("express").Router();
/*routes:
1. POST localhost:3000/api/register
2. POST localhost:3000/api/authenticate
3. GET localhost:3000/api/dashboard   
*/

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

router.post('/api/authenticate', function (req, res) {
  console.log(" sever.index req.body: ", req.body);
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          var token = jwt.sign(user.toJSON(), config.secret, {
            expiresIn: 10080 // in seconds
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});
// Add routes, both API and view
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tacolist";
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);
// Connect to the Mongo DB

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
