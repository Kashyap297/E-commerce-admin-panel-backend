const mongoose = require('mongoose')

const url = 'mongodb+srv://kashyap29700:4Nb5XYHTA7tehnIm@cluster0.zqmotx1.mongodb.net/projecttable'

const dbConnection = async () => {
    try {
        await mongoose.connect(url)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnection;