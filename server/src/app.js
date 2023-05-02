const express = require('express')
const path = require('path')
const cors = require('cors')
const api = require('./routes/api')
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/v1', api);

app.get('/*', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app