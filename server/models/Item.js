const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
    power: {
        type: Number,
        required: true,
        min: 0
    },
    max_stock: {
        type: Number,
        max: 300
    },
    stock: {
        type: Number,
        min: 0,
        max: 300
    },
    level: {
        type: Number,
        min: 5,
        max: 300
    },
    strength: {
        type: Boolean
    },
    agility: {
        type: Boolean
    },
    vitality: {
        type: Boolean
    },
    intellect: {
        type: Boolean
    },
    price: {
        type: Number,
        min: 0
    },
    elite: {
        type: Boolean
    },
    createdAt: {
        type: String
    }
});

const item = mongoose.model('Item', itemSchema);

module.exports = item;