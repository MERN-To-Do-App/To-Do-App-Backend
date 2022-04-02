const User = require("../models/user");

module.exports.addList = (req, res) => {
  const id = req.params.id;
  const itemName = req.body.itemName;
  // let lists = [];
  const newList = { name: itemName, items: [] }
  // User.findById(id, (err, user) => {
  //   if (err) console.log(err);
  //   else {
  //     lists = user.lists.length === 0 ? [] : user.lists;
  //   }
  // });
  User.findByIdAndUpdate(
    id,
    { $push: {lists: newList} },
    (err) => {
        // console.log(...lists,newList);
      if (err) {
        console.log(err);
        res.status(400).send({ msg: "Error" });
      } else {
        res.status(200).send({ msg: "OK" });
      }
    }
  );
};
