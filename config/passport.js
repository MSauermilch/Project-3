var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
// var jwt = require('jsonwebtoken');
// var mongoose = require('mongoose');
var User = require('../models/user');
var config = require('../config/main');
var passport = require('passport');
// require('../config/passport')(passport);

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  // console.log("passport.js", passport.use, "END\n~~~~~~");
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};