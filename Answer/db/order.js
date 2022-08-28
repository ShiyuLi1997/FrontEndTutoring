const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    userId:{
        type: mongoose.ObjectId,
        required: true,
    },
    itemId:{
        type: mongoose.ObjectId,
        required: true,
    },
    orderStatus:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    shippingAddress:{
        type: String,
        required: true,
    },
    billingAddress:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
})

const OrderModel = mongoose.model("week5_proj_Order", orderSchema)
module.exports = OrderModel
