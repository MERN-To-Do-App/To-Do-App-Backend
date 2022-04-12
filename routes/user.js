const express = require('express')
const router = express.Router();

const {getUser} = require('../controller/user')
const {addList, deleteList} = require('../controller/list')
const {addItem} = require('../controller/item')

router.post('/:id/item',addItem)

router.post('/:id/list',addList)
router.delete('/:id/list',deleteList)

router.get('/:id',getUser)

module.exports = router