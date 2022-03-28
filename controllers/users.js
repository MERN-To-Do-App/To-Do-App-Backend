const User = require('../models/user');
exports.login = function(passport.authenticate('local'), (req, res) => { 
    res.statusCode = 200;                                                                    
    res.json({success: true, status: 'You are successfully logged in'});   
  })