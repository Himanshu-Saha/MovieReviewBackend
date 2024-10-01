const express = require("express");
const router = express.Router();

const { getReviews, createReview,getReviewsByMovieId } = require("../controllers/reviews");

router.post("/review/create", createReview);
router.get("/reviews", getReviews);
router.get("/reviews/:movieId", getReviewsByMovieId);

module.exports = router;
