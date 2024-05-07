const {Router} = require('express')
const subCatController = require('../controllers/subCategoryController')

const subCatRouter = Router()

subCatRouter.post('/create', subCatController.create)
subCatRouter.get('/', subCatController.get)
subCatRouter.get('/create', subCatController.form)
subCatRouter.get('/delete/:id', subCatController.delete)
subCatRouter.get('/edit/:id', subCatController.edit)
subCatRouter.post('/edit/:id', subCatController.update)

module.exports = subCatRouter