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

exports.getReviewsByMovieId = async (req, res) => {
    const id = req.params.movieId;
    const data = await Reviews.find({ movieId: id });

    if (!data) {
        return res.status(404).json({
            detail: "No data found",
        });
    }

    return res.send(data);
};

exports.createReview = async (req, res) => {
    if (!req.body.movieId || !req.body.rating) {
        return res.status(206).json({
            detail: "Incomplete data",
        });
    }

    const review = new Reviews({
        movieId: req.body.movieId,
        reviewerName: req.body.reviewerName,
        rating: req.body.rating,
        reviewComments: req.body.reviewComments,
    });

    await review
        .save()
        .then(() => {
            return res.status(201).json({
                detail: "Successfully Added new review",
            });
        })
        .catch((err) => {
            return res.status(409).json({
                detail: "Error while saving the review",
            });
        });
};
