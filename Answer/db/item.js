const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    reviews:{
        type: Array,
    },
    quantity:{
        type: Number,
    },
})

const ItemModel = mongoose.model("week5_proj_Item", itemSchema)
module.exports = ItemModel
