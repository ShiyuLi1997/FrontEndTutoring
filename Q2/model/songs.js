const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
})