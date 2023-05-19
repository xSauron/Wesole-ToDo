const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    localization: {
        type: String
    },
    color: {
        type: String
    },
    importance: {
        type: String
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("TodoItem", todoSchema);