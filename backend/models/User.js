const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: Number,
        unique: true
    },
    firstName: {
        type: String,
        unique: false,
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;