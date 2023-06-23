const mongoose = require("mongoose")

const ImageSchema = new mongoose.Schema({
    image: {
        type: String
    },
    // {
    //     collection: "ImageDetails"
    // },
    date: {
        type: Date,
        default: Date.now
    }
});

const Images = mongoose.model("ImageDetails", ImageSchema)

module.exports = Images