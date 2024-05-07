const {Router} = require('express')
const productController = require('../controllers/productController')

const productRouter = Router()

productRouter.post('/create', productController.create)
productRouter.get('/', productController.get)
productRouter.get('/create', productController.form)
productRouter.get('/delete/:id', productController.delete)
productRouter.get('/edit/:id', productController.edit)
productRouter.post('/edit/:id', productController.update)

module.exports = productRouter