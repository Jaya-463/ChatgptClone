const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected ${mongoose.connection.host}`.green.bold);
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`.red.bold);
        process.exit(1);
    }
};

module.exports = connectDB;