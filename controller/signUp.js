const User = require("../models/user");
const passport = require('passport')

module.exports.createNewUser = (req, res) => {
  const {name, email, password, confirmPassword} = req.body
  //fields blank check
  if(!name || !email || !password){
    return res.status(400).send({ msg: "Not all fields have been entered." });
  }

  if(password!==confirmPassword){
    return res.status(400).send({ msg: "Password not matching..." });
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
        res.status(400).send({ msg: "Error creating user" });
      }else{
        passport.authenticate("local")(req, res, () => {
          res.status(200).send(user);
          console.log(req.session.passport.user);
        });
      }
    }
  )
  
};
