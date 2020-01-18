const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 4,
        maxlength: 13,
        trim: true,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        trim: true,
        required: true        
    },
    class: {
        type: String,
        required: true
    },
    heroImg: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        min: 0,
        max: 5000
    },
    strength: {
        type: Number,
        min: 0,
        max: 500
    },
    agility: {
        type: Number,
        min: 0,
        max: 500
    },
    intellect: {
        type: Number,
        min: 0,
        max: 500
    },
    vitality: {
        type: Number,
        min: 0,
        max: 500
    },
    level: {
        type: Number,
        min: 0,
        max: 100
    },
    experience: {
        type: Number,
        min: 0
    },
    wins: {
        type: Number,
        min: 0
    },
    loses: {
        type: Number,
        min: 0
    },
    rank: {
        type: Number,
        min: 0
    },
    gold: {
        type: Number,
        min: 0
    },
    items: [],
    bank: [],
    token: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;