const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose')
const listSchema = require('./list')


const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    unique: true,
  },
  username: String,
  password: String,
  lists: [listSchema],
});

userSchema.plugin(passportLocalMongoose)

module.exports = new mongoose.model("User", userSchema);