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

//dbconnect
connectDB();

//cors
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

const LocalStrategy = require('passport-local').Strategy

passport.use(
  new LocalStrategy({
    usernameField: 'email'
  },
  User.authenticate()
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//use routes
app.use("/api/signUp", signUpRoute);

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});