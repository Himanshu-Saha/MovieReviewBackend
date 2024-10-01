const Reviews = require("../models/review");

exports.getReviews = async (req, res) => {
    const data = await Reviews.find({});

    if (!data) {
        return res.status(404).json({
            detail: "No data found",
        });
    }

    return res.send(data);
};

exports.createReview = async (req, res) => {
    // const data = await Events.find({});

    // if (!data) {
    //     return res.status(404).json({
    //         detail: "No data found",
    //     });
    // }

    const data = {
        id: 1,
        name: "test",
    };

    return res.send(data);
};
