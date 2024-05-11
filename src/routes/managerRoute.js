const { Router } = require('express')
const managerController = require('../controllers/managerController')

const managerRouter = Router()

managerRouter.post('/create', managerController.create)

module.exports = managerRouter