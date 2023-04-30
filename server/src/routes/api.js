const express = require('express')
const userRouter = require('./users.routes')

const api = express.Router()

api.use('/users', userRouter)

module.exports = api