const mongoose = require('mongoose');

const boughtItemFromMarketSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    user_img: {
        type: String,
        required: true
    },
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    item_img: {
        type: String,
        required: true
    },
    item_type: {
        type: String,
        required: true
    },
    spent_gold: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }
});

const BoughtItemFromMarketModel = mongoose.model('BoughtItemFromMarket', boughtItemFromMarketSchema);

module.exports = BoughtItemFromMarketModel;