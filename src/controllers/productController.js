const productModel = require("../models/productModel")
const subCategoryModel = require("../models/subCategoryModel")

const productController = {
    create: async (req, res) => {
        try {
            const product = await productModel.create(req.body)
            res.redirect('back')
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const product = await productModel.find({}).populate({
                path: 'subCategoryID',
                populate: {
                    path: 'categoryID'
                }
            })
            res.render('Pages/products', { products: product })
        } catch (error) {
            console.log(error)
        }
    },
    form: async (req, res) => {
        try {
            const subCategoryData = await subCategoryModel.find({})
            console.log(subCategoryData)
            res.render('Pages/addproduct', { subcategories: subCategoryData })
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const product = await productModel.findByIdAndDelete(id)
            res.redirect('/product')
        } catch (error) {
            console.log(error)
        }
    },
    edit: async (req, res) => {
        const { id } = req.params
        try {
            const product = await productModel.findById(id)
            const subCategoryData = await subCategoryModel.find({})
            res.render('Pages/editproduct', { product: product, subcategories: subCategoryData })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name, subCategoryID } = req.body
        try {
            const product = await productModel.findByIdAndUpdate(id, { name: name, subCategoryID: subCategoryID }, { new: true })
            res.redirect('/product')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productController