const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('MANAGER'), categoryController.create)
router.put('/:id', checkRole('MANAGER'), categoryController.update)
router.delete('/:id', checkRole('MANAGER'), categoryController.delete)
router.get('/', categoryController.getAll)

module.exports = router
