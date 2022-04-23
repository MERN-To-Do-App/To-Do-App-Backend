const express = require('express')
const router = express.Router();

const {getUser} = require('../controller/user')
const {addList, deleteList} = require('../controller/list')
const {addItem, deleteItem} = require('../controller/item')

router.post('/:id/item',addItem)
router.delete('/:id/item',deleteItem)

router.post('/:id/list',addList)
router.delete('/:id/list',deleteList)

router.get('/:id',getUser)

module.exports = router