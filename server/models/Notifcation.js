const mongoose = require('mongoose');

const NotificationSchema = mongoose.Schema({
    title: {
        type: String
    },
    message: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    itemImg: {
        type: String
    },
    itemType: {
        type: String
    },
    created_at: {
        type: String
    }
});

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;