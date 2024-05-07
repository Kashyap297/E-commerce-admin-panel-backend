const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subcategories'
    }

}, { timestamps: true })

module.exports = mongoose.model('products', productSchema)