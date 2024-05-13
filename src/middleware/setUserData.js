const setUserData = (req, res, next) => {
    try {
        const user = req.user || '';
        res.locals.user = user
        next()
    } catch (error) {
        console.log(error)
    }

}

module.exports = setUserData