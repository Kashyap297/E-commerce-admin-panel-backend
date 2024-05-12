const { Router } = require('express')
const userController = require('../controllers/userController')

const userRouter = Router()

userRouter.get('/signup', userController.signupForm)
userRouter.post('/signup', userController.signup)
userRouter.get('/login', userController.loginForm)
userRouter.post('/login', userController.login)


module.exports = userRouter