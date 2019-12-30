const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: Number,
        unique: true
    },
    firstName: {
        type: String,
        unique: false
    },
    username: {
        type: String,
        index: {
            unique: true
        }
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("user", userSchema);

module.exports = User;