const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

export default UserSchema;