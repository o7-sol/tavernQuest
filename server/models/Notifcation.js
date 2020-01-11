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
    created_at: {
        type : Date, 
        default: Date.now
    }
});

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;