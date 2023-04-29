const express = require('express')
const auth = require('../utils/auth')
const { logoutAll, logoutUser, loginUser, registerUser, updateUser, getProfile, deleteUser } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.post('/users', registerUser)

userRouter.post('/users/login', loginUser)

userRouter.post('/users/logout', auth, logoutUser)

userRouter.post('/users/logoutAll', auth, logoutAll)

userRouter.get('/users/me', auth, getProfile)

userRouter.patch('/users/me', auth, updateUser)

userRouter.delete('/users/me', auth, deleteUser)

module.exports = userRouter