const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

const connectDB = () => {
  try {
    mongoose.connect(url, () => {
      console.log("database is connected");
    });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB
