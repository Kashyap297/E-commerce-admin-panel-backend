const userModel = require("../models/userModel")
const bcryptjs = require('bcryptjs')

const managerController = {
    create: async (req, res) => {
        try {
            const { name, email, password } = req.body
            const user = await userModel.findOne({ email })

            if (user) {
                return res.status(400).json({
                    message: 'Manager Email already Exist',
                    success: false
                })
            }
            const show = password
            // hashing Password
            const _SALT_ROUND = 10
            const hashedPassword = await bcryptjs.hash(password, _SALT_ROUND)

            const data = await userModel.create({ name, email, show: show, password: hashedPassword, role: 'manager' })
            res.redirect('/manager')
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const manager = await userModel.find({ role: 'manager' })
            console.log(manager)
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
            const manager = await userModel.findByIdAndDelete(id);
            res.redirect('/manager')
        } catch (error) {
            console.log(error)
        }
    },
    edit: async (req, res) => {
        const { id } = req.params
        try {
            const manager = await userModel.findById(id)
            res.render('Pages/manager/editmanager', { manager: manager })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name, email, password } = req.body
        try {
            const show = password
            // hashpassword
            const _SALT_ROUND = 10
            const hashedPassword = await bcryptjs.hash(password, _SALT_ROUND)

            const manager = await userModel.findByIdAndUpdate(id, { name: name, email: email, password: hashedPassword, show : show }, { new: true })
            res.redirect('/manager')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = managerController