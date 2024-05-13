const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const guest = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return next()
        }

        const secret = "secret_Key"

        const payload = jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return next()
            }
            return decoded
        })

        if (!payload) {
            return next()
        }

        const user = await userModel.findById(payload.sub).select('-password -show -createdAt -updatedAt -__v')
        // console.log(user)
        if (!user) {
            return next()
        }

        if (user) {
            if (user.role === 'user') {
                res.redirect('/user/user')
            }
            if (user.role === 'manager' || user.role === 'admin') {
                res.redirect('/')
            }
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = guest