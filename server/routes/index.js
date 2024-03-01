const Router = require('express')
const router = new Router()
const procedureRouter = require('./procedureRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/procedure', procedureRouter)

module.exports = router
