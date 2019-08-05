const mongoose = require('mongoose');

const itemDiscountSchema = mongoose.Schema({
    item_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    power: {
        type: Number,
        required: true,
        min: 0
    },
    skill: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: String
    }
});

const itemDiscountModel = mongoose.model('ItemDiscount', itemDiscountSchema);

module.exports = itemDiscountModel;