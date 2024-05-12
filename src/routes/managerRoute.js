const { Router } = require('express')
const managerController = require('../controllers/managerController')
const authenticate = require('../middleware/authenticate')

const managerRouter = Router()

managerRouter.use(authenticate)

managerRouter.post('/create', managerController.create)
managerRouter.get('/', managerController.get)
managerRouter.get('/create', managerController.form)
managerRouter.get('/delete/:id', managerController.delete)
managerRouter.get('/edit/:id', managerController.edit)
managerRouter.post('/edit/:id', managerController.update)

module.exports = managerRouter