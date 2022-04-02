const User = require("../models/user");

module.exports.getUser = (req, res) => {
  // if (req.isAuthenticated()) {
    const id = req.params.id;
    User.findById(id, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        if (user) res.status(200).send({user, msg:"Account Found"});
        else {
          res.status(400).send({ msg: "Invalid User" });
        }
      }
    });
  // } else {
  //   res.status(401).send({ msg: "Unauthorized User" });
  // }
};
