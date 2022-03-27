const User = require("../models/user");
const passport = require('passport')

module.exports.createNewUser = (req, res) => {
  const {name, email, password} = req.body


  //fields blank check
  if(!name || !email || !password){
    return res.status(400).json({ msg: "Not all fields have been entered." });
  }

  //duplicate user check
  User.register(
    {
      name: name,
      email: email,
      username: email,
      lists: []
    },
    password,
    (err,user)=>{
      if (err) {
        console.log(err);
        res.status(400).json({ msg: "Error creating user" });
      }else{
        passport.authenticate("local")(req, res, () => {
          res.status(200).json(user);
        });
      }
    }
  )
  
};
