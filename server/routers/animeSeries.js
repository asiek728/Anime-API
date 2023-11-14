const express = require('express')
const router = express.Router()

const animeController = require('../controllers/animeController')

router.get('/', animeController.index)
router.get('/:id', animeController.show)
router.post('/', animeController.create)
router.patch('/:id', animeController.update)
router.delete('/:id', animeController.destroy)

module.exports = router
