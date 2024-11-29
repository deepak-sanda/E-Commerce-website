const mongoose = require("mongoose");

const AmazonUserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})

const UserModel  = mongoose.model("User",AmazonUserSchema)

module.exports = {UserModel}