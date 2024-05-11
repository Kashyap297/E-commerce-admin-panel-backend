const managerModel = require("../models/managerModel")

const managerController = {
    create: async (req, res) => {
        try {
            const { name, email, password } = req.body
            const manager = await managerModel.findOne({ email })
            if (manager) {
                return res.status(400).json({
                    message: 'Email already Exist',
                    success: false
                })
            }
            const data = await managerModel.create({ name, email, password })
            res.redirect('/manager')
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const manager = await managerModel.find()
            // res.send(manager)
            res.render('Pages/manager/manager', { managers: manager })
        } catch (error) {
            console.log(error)
        }
    },
    form: (req, res) => {
        try {
            res.render('Pages/manager/addmanager')
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const manager = await managerModel.findByIdAndDelete(id);
            res.redirect('/manager')
        } catch (error) {
            console.log(error)
        }
    },
    edit: async (req, res) => {
        const { id } = req.params
        try {
            const manager = await managerModel.findById(id)
            res.render('Pages/manager/editmanager', { manager: manager })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name, email, password } = req.body
        try {
            const manager = await managerModel.findByIdAndUpdate(id, { name: name, email: email, password: password }, { new: true })
            res.redirect('/manager')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = managerController