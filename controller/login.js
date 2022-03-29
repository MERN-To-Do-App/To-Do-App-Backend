const passport = require("passport");
const User = require("../models/user");

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = new User({
    email,
    password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
      res.status(401).send({msg: "Login failed"})
    } else {
      passport.authenticate("local")(req, res, function () {
        res.status(200).send({msg:"Login successful"});
      });
    }
  });
};
