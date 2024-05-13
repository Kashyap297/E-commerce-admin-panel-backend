const { Router } = require('express')
const categoryController = require('../controllers/categoryController')
const authenticate = require('../middleware/authenticate')
const setUserData = require('../middleware/setUserData')
const ensureUserAccess = require('../middleware/ensureUserAccess')

const categoryRouter = Router()

// authenticate middleware
categoryRouter.use(authenticate)
categoryRouter.use(setUserData)
categoryRouter.use(ensureUserAccess)

categoryRouter.post('/create', categoryController.create)
categoryRouter.get('/', categoryController.get)
categoryRouter.get('/create', categoryController.form)
categoryRouter.get('/delete/:id', categoryController.delete)
categoryRouter.get('/edit/:id', categoryController.edit)
categoryRouter.post('/edit/:id', categoryController.update)

module.exports = categoryRouter