const Router = require('express')
const router = new Router()
const procedureController = require('../controllers/procedureController')

router.post('/', procedureController.create)
router.get('/', procedureController.getAll)
router.get('/:id', procedureController.getOne)

module.exports = router
