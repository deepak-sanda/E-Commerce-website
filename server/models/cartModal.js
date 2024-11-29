const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    detailUrl: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }


})


const CartModal = mongoose.model("Cart", cartSchema)
module.exports = CartModal