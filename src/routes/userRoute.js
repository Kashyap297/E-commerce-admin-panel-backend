const { Router } = require('express')
const userController = require('../controllers/userController')
const setUserData = require('../middleware/setUserData')
const guest = require('../middleware/guest')
const authenticate = require('../middleware/authenticate')
const onlyuser = require('../middleware/onlyuser')
const userRouter = Router()

userRouter.use(setUserData)

userRouter.get('/signup', guest, userController.signupForm)
userRouter.post('/signup', guest, userController.signup)
userRouter.get('/login', guest, userController.loginForm)
userRouter.post('/login', guest, userController.login)
userRouter.get('/logout', userController.logout)
userRouter.get('/user', authenticate, setUserData, onlyuser, userController.userPage)
userRouter.get('/otpverification', guest, userController.otpForm)
userRouter.post('/otpverification', guest, userController.otpVerify)

module.exports = userRouter