const express = require("express");
const mongoose = require("mongoose");

// TO DO: Connect database

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/carSavvy"

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server listening on PORT: " + PORT)
})