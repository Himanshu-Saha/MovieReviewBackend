const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const uri =
    "mongodb+srv://admin:root%40123@projectdb.gd74n.mongodb.net/?retryWrites=true&w=majority&appName=ProjectDb";

const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const movieRoutes = require("./routes/movie");
const reviewRoutes = require("./routes/review");

const app = express();

app.use(express.json());

app.use("/api", movieRoutes);
app.use("/api", reviewRoutes);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors())

const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        // await mongoose.disconnect();
    }
}
run().catch(console.dir);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
