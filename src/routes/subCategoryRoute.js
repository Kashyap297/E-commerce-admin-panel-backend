const {Router} = require('express')
const subCatController = require('../controllers/subCategoryController')
const authenticate = require('../middleware/authenticate')
const setUserData = require('../middleware/setUserData')
const ensureUserAccess = require('../middleware/ensureUserAccess')

const subCatRouter = Router()

// authenticate middleware
subCatRouter.use(authenticate)
subCatRouter.use(setUserData)
subCatRouter.use(ensureUserAccess)

subCatRouter.post('/create', subCatController.create)
subCatRouter.get('/', subCatController.get)
subCatRouter.get('/create', subCatController.form)
subCatRouter.get('/delete/:id', subCatController.delete)
subCatRouter.get('/edit/:id', subCatController.edit)
subCatRouter.post('/edit/:id', subCatController.update)

module.exports = subCatRouter