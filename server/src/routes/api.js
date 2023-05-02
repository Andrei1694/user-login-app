const express = require('express')
const userRouter = require('./users.routes')

const api = express.Router()
const URL = `https://api.open-meteo.com/v1/forecast?latitude=44.43&longitude=26.11&hourly=temperature_2m`
api.use('/users', userRouter)
api.get('/weather', async (req, res, next) => {

    try {
        const URL = `https://api.open-meteo.com/v1/forecast?latitude=44.44&longitude=26.09&hourly=temperature_2m&current_weather=true&forecast_days=1`;
        const response = await fetch(URL)
        const data = await response.json()
        const { current_weather } = data
        res.status(200).json({ current_weather })

    } catch (error) {
        res.status(400).json({ error })
    }
})

module.exports = api