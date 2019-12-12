const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        unique: false,
    },
    username: {
        type: String,
        unique: true
    },
    car: {
        type: String
    },
    mileage: {
        type: Number
    }
})

export default UserSchema;