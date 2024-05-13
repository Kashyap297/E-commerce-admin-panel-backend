const userModel = require('../models/userModel')
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")

const userController = {
    signup: async (req, res) => {
        try {
            const { name, email, password } = req.body
            const user = await userModel.findOne({ email })

            // existing User
            if (user) {
                return res.status(400).redirect('back')
            }

            // hashing Password
            const _SALT_ROUND = 10
            const hashedPassword = await bcryptjs.hash(password, _SALT_ROUND)

            // SignUp User
            const data = await userModel.create({ name, email, password: hashedPassword })
            res.redirect('/user/login')
        } catch (error) {
            console.log(error)
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await userModel.findOne({ email })

            if (!user) {
                return res.status(401).redirect('/user/signup')
            }

            const isVerify = await bcryptjs.compare(password, user.password)

            if (!isVerify) {
                return res.status(401).redirect('back')
            }

            // token Generate
            const payload = {
                sub: user._id,
                user: user.name,
                role: user.role
            }

            const secret = "secret_Key"

            const token = jwt.sign(payload, secret, {
                expiresIn: "1d"
            })

            console.log(token)

            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 //24 Hr
            })

            // res.redirect('/')
            console.log(user)
            if (user.role == "user") {
                res.render('Pages/user/user')
            }else {
                res.redirect('/')
            }

        } catch (error) {
            console.log(error)
        }
    },
    logout : async(req, res) => {
        try {
            res.clearCookie("token");
            res.redirect('/user/login')
        } catch (error) {
            console.log(error)
        }
    },
    loginForm: async (req, res) => {
        try {

            res.render('Pages/user/loginForm', { user: '' })
        } catch (error) {
            console.log(error)
        }
    },
    signupForm: async (req, res) => {
        try {
            res.render('Pages/user/signupForm', { user: '' })
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = userController