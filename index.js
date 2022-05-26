require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require('./config/passport')
const session = require('express-session')

const connectDB = require("./config/database");
const User = require('./models/user')

const app = express();

//Routes
const signUpRoute = require("./routes/signUp");
const loginRoute = require('./routes/login');
const userRoute = require("./routes/user");

//dbconnect
connectDB();

////middleware

//cors
app.use(cors({
  'Access-Control-Allow-Origin': '*',
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}));

//express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//session
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

//Passport
app.use(passport.initialize());
app.use(passport.session());

//use routes
app.use("/api/signUp", signUpRoute);
app.use('/api/login', loginRoute);
app.use("/api/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});