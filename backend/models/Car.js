const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema ({
    year: {
        type: Number
    },
    make: {
        type: String
    },
    model: {
        type: String
    },
    subModel: {
        type: String
    },
    color: {
        type: String
    }
});

const Car = mongoose.model("Car", carSchema)

module.exports = Car;