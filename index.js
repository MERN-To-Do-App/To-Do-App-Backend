const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const authenticate = require('./authenticate');
const loginRoute = require('./routes/login');

const app = express();
const url = 'mongodb://localhost:27017/taskManagement';

mongoose.connect(url)
.then(db => console.log('Connected to the database'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    name:'session-id',
    secret: '12345-67890-09876-54321',
    saveUninitialized: false,
    resave: false,
    })); 

app.use(passport.initialize());  
app.use(passport.session()); 
app.use('/users', usersRouter);


app.listen(3000, () =>{
    console.log('Serer is started successfully');
});


/*


*/