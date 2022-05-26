const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

  passport.serializeUser(function (user, done) {
    console.log('serializing user');
    done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
    console.log('deserializing user');
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      User.authenticate()
    )
  );

  module.exports = passport
