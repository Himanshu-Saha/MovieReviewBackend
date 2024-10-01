const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true,
    },

    reviewerName: {
        type: String,
    },

    rating: {
        type: Number,
        default: 0,
        max: 10,
        min: 1,
    },
    reviewComments: {
        type: String,
    },
});

module.exports = mongoose.model("Reviews", reviewSchema);