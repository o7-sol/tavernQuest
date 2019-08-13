const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 5,
        maxlength: 15,
        require: true,
        trim: true,
        unique: true
    },
    gold: {
        type: Number,
        min: 0
    },
    experience: {
        type: Number,
        min: 0
    },
    leader: {
        type: String,
        required: true
    },
    leaderImg: {
        type: String
    },
    announcement: {
        type: String,
        trim: true
    },
    announcement_createdAt: {
        type: String
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
    itemsExchange: [],
    latestActivity: [],
    messages: [],
    members: [],
    createdAt: {
        type: String
    }
});

const guildModel = mongoose.model('Guild', guildSchema);

module.exports = guildModel;