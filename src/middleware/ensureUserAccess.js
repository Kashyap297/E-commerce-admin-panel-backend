const ensureUserAccess = async (req, res, next) => {
    try {
        if (!req.user) {
            res.clearCookie('token')
            return res.redirect('/user/login')
        }

        if (req.user.role === "user") {
            return res.redirect('/user/user')
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = ensureUserAccess