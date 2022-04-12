const mongoose = require("mongoose");
const itemSchema = require('./item')

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  items: [itemSchema],
});

module.exports = listSchema