const mongoose = require('mongoose');

const stackExchangeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    power: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 99999
    },
    elite: {
        type: Boolean
    },
    createdAt: {
        type: String,
        required: true
    }             
});

const stackExchangeModel = mongoose.model('StackExchange', stackExchangeSchema);

module.exports = stackExchangeModel;