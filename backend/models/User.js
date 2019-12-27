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
        type: Date
    }
})

const User = mongoose.model("Users", userSchema);

module.exports = User;