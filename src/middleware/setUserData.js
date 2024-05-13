const setUserData = (req, res, next) => {
    const user = req.user || ''
    res.locals.user = user
    next()
}

module.exports = setUserData