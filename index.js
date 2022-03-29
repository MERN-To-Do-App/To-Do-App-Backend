require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require('passport')
const session = require('express-session')

const connectDB = require("./config/database");
const User = require('./models/user')

const app = express();

//Routes
const signUpRoute = require("./routes/signUp");
const userRoute = require("./routes/user");

//dbconnect
connectDB();

////middleware

//cors
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

//express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//session
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

//Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')();

//use routes
app.use("/api/signUp", signUpRoute);
app.use("/api/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});