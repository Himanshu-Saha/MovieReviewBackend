const express = require("express");
const router = express.Router();

const {
    getMoviesById,
    getMovies,
    createMovie,
} = require("../controllers/movies");

router.post("/movies/create", createMovie);
router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);

module.exports = router;
