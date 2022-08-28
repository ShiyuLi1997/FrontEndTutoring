const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    admin:{
        type: Boolean,
    },
    userName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    cart:{
        type: Array,
    },
    phone:{
        type: Array,
    },
    orderHistory:{
        type: Array,
    },
    shippingAddress:{
        type: Array,
    },
    billingAddress:{
        type:Array,
    },
})

const UserModel = mongoose.model("week5_proj_User", userSchema)
module.exports = UserModel
