const User = require("../models/user");

module.exports.addItem = (req, res) => {
  const { itemName, listName } = req.body;
  const user_id = req.params.id;
  User.findByIdAndUpdate(id,{})

};
