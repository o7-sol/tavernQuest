const User = require('../models/User');

module.exports = function(socket, io) {
    socket.on('boughtItemFromMarket', async (data) => {
        const userID = data.userID;
        const item = data.item;
        const user = await User.findById(userID);

        if(!user) {
            return console.log('User does not exist.');
        }
       
        io.emit('boughtItemFromMarket', {
            user,
            item
        })
    });
}