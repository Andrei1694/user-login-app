const mongoose = require('mongoose');

const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '../', '.env') });

let MONGO_URL = null
if (process.env.NODE_ENV === 'development') {
    console.log('dev mode')
    MONGO_URL = `${process.env.MONGO_URI}?directConnection=true&serverSelectionTimeoutMS=2000`
} else {
    console.log('production mode')
    MONGO_URL = `${process.env.MONGO_URI}?directConnection=true&serverSelectionTimeoutMS=2000authSource=admin`
    console.log(MONGO_URL)
}


mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}