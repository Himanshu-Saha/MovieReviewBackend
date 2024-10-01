const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    releaseDate: {
        type: Date,
        required: true,
    },

    averageRating: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("Movies", movieSchema);
