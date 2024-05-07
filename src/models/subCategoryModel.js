const mongoose = require('mongoose')


const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    categoryID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "categories"
    }
},{timestamps : true});

module.exports = mongoose.model('subcategories', subCategorySchema)