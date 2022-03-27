const express = require('express')
const router = express.Router();

const controller = require('../controller/signUp')

router.post('/',controller.createNewUser)

module.exports = router