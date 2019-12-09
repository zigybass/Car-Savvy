const express = require("express");
const mongoose = require("mongoose");

// TO DO: Connect database

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/carSavvy";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then(() => {
  console.log("MongoDB connected.");
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

require("../backend/api-routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log("Server listening on PORT: " + PORT);
});
