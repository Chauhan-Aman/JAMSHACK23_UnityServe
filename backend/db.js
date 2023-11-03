const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

// const mongouri = "mongodb://127.0.0.1:27017/unityserve";
const MONGO_URI = process.env.REACT_APP_MONGO_URL;
console.log(MONGO_URI)

const connectToMongo = async () => {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log("Connect to DataBase")
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

module.exports = connectToMongo;