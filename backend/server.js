require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/carSavvy";

mongoose.connect(
  MONGODB_URI, 
  { 
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
 }
 ).then(() => {
  console.log("MongoDB connected.");
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

require("./api-routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log("Server listening on PORT: " + PORT);
});
