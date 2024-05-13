const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.redirect('/user/login')
        }

        const secret = "secret_Key"

        try {
            const payload = jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    return res.redirect('/user/login')
                }
                return decoded
            })

            if (!payload) {
                return res.redirect('/user/login')
            }

            const user = await userModel.findById(payload.sub).select('-password -show -createdAt -updatedAt -__v')
            if (!user) {
                return res.redirect('/user/login')
            }

            req.user = user;
            next()
        } catch (error) {
            return res.redirect('/user/login');
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error while verifying token',
            success: false
        })
    }
}
module.exports = authenticate