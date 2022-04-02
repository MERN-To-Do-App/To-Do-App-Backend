const express = require('express')
const router = express.Router();

const {getUser} = require('../controller/user')
const {addList} = require('../controller/list')

router.post('/:id/list',addList)
router.get('/:id',getUser)

module.exports = router