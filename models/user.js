var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');    

var User = new Schema({});

User.plugin(passportLocalMongoose); // Add support for username and hashed storage password  (for Passport)

module.exports = mongoose.model('User', User);