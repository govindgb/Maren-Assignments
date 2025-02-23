const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {

        console.log(process.env.MONGO_URL);
        const res  = await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;