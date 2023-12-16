const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
    } catch (error) {
        throw error;
    }
}

module.exports = { connectDB };