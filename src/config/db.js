const mongoose = require('mongoose')

const url = 'mongodb+srv://kashyap29700:0dDOcS8FhzjA9P7z@cluster0.n8c9aol.mongodb.net/FinalProj'

const dbConnection = async () => {
    try {
        await mongoose.connect(url)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnection;