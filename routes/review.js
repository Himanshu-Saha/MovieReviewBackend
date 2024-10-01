const express = require("express");
const router = express.Router();

const { getReviews, createReview } = require("../controllers/reviews");

router.post("/review/create", createReview);
router.get("/reviews", getReviews);

module.exports = router;
