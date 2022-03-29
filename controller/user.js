const User = require("../models/user");

module.exports.getUser = (req, res) => {
  console.log(req);
  if (req.isAuthenticated()) {
    const id = req.session.passport.user;
    User.findById(id, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        if (user) res.status(200).send(user);
        else {
          res.status(400).send({ msg: "Invalid User" });
        }
      }
    });
  } else {
    res.status(401).send({ msg: "Unauthorized User" });
  }
};
