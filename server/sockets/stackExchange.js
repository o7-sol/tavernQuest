const User = require('../models/User');
const striptags = require('striptags');

module.exports = function(socket, io) {
    socket.on('soldStackExchangeItem', async (data) => {
        const username = await data.item.user;
        const user = await User.findOne({username});

        if(!user) {
            return console.log('User does not exist.');
        }

        socket.broadcast.emit('soldStackExchangeItem', {
            userID: user._id,
            message: `${data.item.title} was sold in stack exchange`,
            itemImg: data.item.img,
            type: data.item.type
        });
    });
};