const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    userId: {
        type: Number,
        unique: true
    },
    firstName: {
        type: String,
        unique: false,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const salt = bcrypt.genSaltSync(10);

userSchema.methods.comparePasswords = function (plainPass) {
    return bcrypt.compareSync(plainPass, this.password);
};

userSchema.pre("save", function() {
    this.password = bcrypt.hashSync(this.password, salt, (err, hash) => {
        if (err) {
            console.log(err)
        } else {
            return hash;
        }
    });
});

module.exports = mongoose.model("User", userSchema);