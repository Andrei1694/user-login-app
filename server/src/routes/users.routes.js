const express = require('express')
const auth = require('../utils/auth')
const { logoutAll, logoutUser, loginUser, registerUser, updateUser, getProfile, deleteUser } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.post('', registerUser)

userRouter.post('/login', loginUser)

userRouter.post('/logout', auth, logoutUser)

userRouter.post('/logoutAll', auth, logoutAll)

userRouter.get('/me', auth, getProfile)

userRouter.patch('/me', auth, updateUser)

userRouter.delete('/me', auth, deleteUser)

module.exports = userRouter