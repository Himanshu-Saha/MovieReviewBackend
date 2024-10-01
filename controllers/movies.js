const Movies = require("../models/movie");

exports.getMovies = async (req, res) => {
    const data = await Movies.find({});

    if (!data) {
        return res.status(404).json({
            detail: "No data found",
        });
    }

    return res.send(data);
};

exports.getMoviesById = async (req, res) => {
    const id = req.params.id;
    const data = await Movies.findOne({ _id: id });

    if (!data) {
        return res.status(404).json({
            detail: "No data found",
        });
    }

    return res.send(data);
};

exports.createMovie = async (req, res) => {
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

exports.createMovie = async (req, res) => {
    if (!req.body.name || !req.body.releaseDate) {
        return res.status(206).json({
            detail: "Incomplete data",
        });
    }

    const movie = new Movies({
        name: req.body.name,
        releaseDate: req.body.releaseDate,
    });

    await movie
        .save()
        .then(() => {
            return res.status(201).json({
                detail: "Successfully Added new movie",
            });
        })
        .catch((err) => {
            return res.status(409).json({
                detail: "Error while saving the movie",
            });
        });
};
