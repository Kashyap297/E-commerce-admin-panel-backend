const onlyuser = (req, res, next) => {
    try {
        if (!req.user) {
            res.clearCookie('token')
            return res.redirect('/user/login')
        }
        if (req.user.role === "manager" || req.user.role === "admin") {
            return res.redirect('/')
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = onlyuser