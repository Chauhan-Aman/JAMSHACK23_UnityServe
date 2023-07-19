// import dotenv from "dotenv";
// import mongoose from "mongoose";
// const dotenv = require('dotenv')
const mongoose = require('mongoose');

// dotenv.config();

const mongouri = "mongodb://127.0.0.1:27017/unityserve";
// const mongouri = process.env.MONGO_URL;

const connectToMongo = async () => {
    await mongoose.connect(mongouri);
    await console.log("Connected to Database")
}

module.exports = connectToMongo;