const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role : {
        type : String,
        default : 'user'
    },
    show: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema)