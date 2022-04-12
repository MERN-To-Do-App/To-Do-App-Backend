const User = require("../models/user");

module.exports.addList = (req, res) => {
  const id = req.params.id;
  const itemName = req.body.listName;
  const newList = { name: itemName, items: [] };
  
  User.findOneAndUpdate({_id:id,'lists.name': {$ne:itemName}}, { $push: { lists: newList } }, (err) => {
    if (err) {
      console.log(err);
      res.status(400).send({ msg: "Error" });
    } else {
      res.status(200).send({ msg: "OK" });
    }
  });
};

module.exports.deleteList = (req, res) => {
  const listId = req.body.id;
  const userId = req.params.id;
  User.findByIdAndUpdate(userId,{$pull: {lists: {_id: listId}}}, (err) => {
    if (err) res.status(400).send({ msg: "Invalid User" });
    else {
      res.status(200).send({ msg: "List deleted" });
    }
  });
};
