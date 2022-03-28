var express = require('express');
const bodyParser = require('body-parser');
var users = require('../controllers/users');
var passport = require('passport');

var router = express.Router();
router.use(bodyParser.json());

router.post('/login', users.login);