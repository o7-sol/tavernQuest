const mongoose = require('mongoose');

const guildActionSchema = mongoose.Schema({
    username: {
        type: String,
    },
    img: {
        type: String,
    },
    borrowGold: {
        type: Boolean
    }, 
    gold: {
        type: Boolean
    },
    amount: {
        type: Number
    },
    createdAt: {
        type: String
    }
});

const guildActionModel = mongoose.model('GuildAction', guildActionSchema);

module.exports = guildActionModel;