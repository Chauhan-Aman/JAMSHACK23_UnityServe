const mongoose = require('mongoose');

const mongouri = "mongodb://127.0.0.1:27017/unityserve";

const connectToMongo = async () => {
    await mongoose.connect(mongouri);
}

module.exports = connectToMongo;