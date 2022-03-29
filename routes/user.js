const express = require('express')
const router = express.Router();

const controller = require('../controller/user')

router.get('/',controller.getUser)

module.exports = router