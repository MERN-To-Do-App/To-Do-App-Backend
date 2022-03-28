const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      User.authenticate()
    )
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
