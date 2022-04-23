const User = require("../models/user");

module.exports.addItem = (req, res) => {
  const { itemName, listName } = req.body;
  const user_id = req.params.id;
  User.findOneAndUpdate(
    { _id: user_id, "lists.name": listName },
    {
      $push: {
        "lists.$.items": {
          name: itemName,
        },
      },
    },
    err=>{
      if(err){
        console.log(err);
      }
      else{
        res.status(200).send({msg: "Item created"})
      }
    }
  );
};

module.exports.deleteItem = (req,res)=>{
  const {itemId,listName} = req.body
  const userId = req.params.id;
  User.findOneAndUpdate(
    { _id: userId, "lists.name": listName },
    {
      $pull: {
        "lists.$.items": {
          _id: itemId
        },
      },
    },
    err=>{
      if(err){
        console.log(err);
      }
      else{
        res.status(200).send({msg: "Item deleted"})
      }
    }
  );
}
