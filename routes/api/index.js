const router = require("express").Router();
const tacoRoutes = require("./tacos");
const userRoutes = require('./users');
const User = require('../../models/user');
// const userSigninRoutes = require('./signin');
var passport = require('passport');
var config = require('../../config/main');
const jwt = require('jsonwebtoken');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

require('../../config/passport')(passport);
// const fetch = '../../client/src/components/Auth/AuthHelperMethods';

//tacos routes
router.use("/tacos", tacoRoutes);
router.use("/users", userRoutes);

// Register new users
router.post('/register', function (req, res) {
  console.log("register im in here");
  if (!req.body.email || !req.body.password) {
    res.json({ success: false, message: 'Please enter email and password.' });
  } else {
    var newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, message: 'That email address already exists.' });
      }
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }
});

// Authenticate the user and get a JSON Web Token to include in the header of future requests.
router.post('/authenticate', function (req, res) {
  console.log(" api.index req.body: ", req.body);
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

// Protect dashboard route with JWT
router.get('/dashboard', passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log(' req : ' + JSON.stringify(req.user) + '.');
  console.log(' req : ' + JSON.stringify(req.user._user) + '.');
  res.send('It worked! User id is: ' + req.user._id + '.');

});

module.exports = router;