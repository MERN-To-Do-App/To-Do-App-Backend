const User = require("../models/user");
const passport = require('../config/passport')

module.exports.createNewUser = (req, res) => {
  const {name, email, password, confirmPassword} = req.body
  //fields blank check
  if(!name || !email || !password){
    return res.status(400).send({ msg: "Not all fields have been entered." });
  }

  if(password!==confirmPassword){
    return res.status(400).send({ msg: "Password not matching..." });
  }

  const predefinedLists = [
    {name: 'My Day', items:[]},
    {name: 'Important', items:[]},
    {name: 'Planned', items:[]},
    {name: 'Assigned', items:[]}
  ]

  //duplicate user check
  User.register(
    new User({
      name: name,
      email: email,
      username: email,
      lists: [...predefinedLists]
    }),
    password,
    (err,user)=>{
      if (err) {
        console.log(err);
        res.status(400).send({error:err, msg: "Email is already registered" });
      }else{
        passport.authenticate("local")(req, res, () => {
          const userData = req.user
          res.status(200).send({user: userData, msg: "Regstration successful"});
        });
      }
    }
  )
  
};
