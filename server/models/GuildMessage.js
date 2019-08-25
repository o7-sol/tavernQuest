const mongoose = require('mongoose');

const guildMessageSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        minlength: 3
    },
    guild: {
        type: String,
        required: true
    },
    createdAt: {
        type: String
    }
});

const guildMessageModel = mongoose.model('GuildMessage', guildMessageSchema);

module.exports = guildMessageModel;