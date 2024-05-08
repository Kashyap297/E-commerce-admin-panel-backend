const productModel = require("../models/productModel")
const subCategoryModel = require("../models/subCategoryModel")

const productController = {
    create: async (req, res) => {
        try {
            let productimage = '';
            if (req.file) {
                productimage = req.file.filename
            }

            const product = await productModel.create({
                ...req.body, productimage: productimage
            });

            console.log(product)

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
            res.render('Pages/product/products', { products: product })
        } catch (error) {
            console.log(error)
        }
    },
    form: async (req, res) => {
        try {
            const subCategoryData = await subCategoryModel.find({})
            // console.log(subCategoryData)
            res.render('Pages/product/addproduct', { subcategories: subCategoryData })
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
            // console.log(product)
            res.render('Pages/product/editproduct', { product: product, subcategories: subCategoryData })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name, description, price, subCategoryID } = req.body
        try {
            let updateFields = { name: name, description: description, price: price, subCategoryID: subCategoryID };
            if(req.file) {
                const productimage = req.file.filename;
                updateFields.productimage = productimage;
            }
            const product = await productModel.findByIdAndUpdate(id, updateFields, { new: true })
            console.log(product)
            res.redirect('/product')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productController