const { Router } = require('express')
const userController = require('../controllers/userController')
const setUserData = require('../middleware/setUserData')
const userRouter = Router()

userRouter.use(setUserData)

userRouter.get('/signup', userController.signupForm)
userRouter.post('/signup', userController.signup)
userRouter.get('/login', userController.loginForm)
userRouter.post('/login', userController.login)
userRouter.get('/logout', userController.logout)


module.exports = userRouter