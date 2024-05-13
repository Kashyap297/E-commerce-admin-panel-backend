const ensureUserAccess = async (req, res, next) => {
    try {
        if (!req.user) {
            res.clearCookie('token')
            return res.redirect('/user/login')
        }

        if (req.user.role === "user") {
            res.redirect('/user/user')
        } else {
            res.redirect('/')
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = ensureUserAccess