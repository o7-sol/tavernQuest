const User = require('../models/User');
const Item = require('../models/Item');
const BoughtItemFromMarket = require('../models/BoughtItemFromMarket');
const dayjs = require('dayjs');

module.exports = function(socket, io) {
    socket.on('boughtItemFromMarket', async (data) => {
        const userID = data.userID;
        const item = data.item;
        const userItemID = data.userItemID;
        const user = await User.findById(userID);
        const itemExist = await Item.findById(item._id);  
        let itemType = null;  
        
        if(!itemExist) {
            return console.log('Item does not exist');
        }

        if(!user) {
            return console.log('User does not exist.');
        }

        const inUserBank = user.bank.some(el => el.id === userItemID);
        const inUserInventory = user.items.some(el => el.id === userItemID);
        
        if(!inUserBank && !inUserInventory) {
            return console.log('User does not contain this item.');
        }

        if(itemExist.strength) {
            itemType = 'strength';
        }
        if(itemExist.vitality) {
            itemType = 'vitality';
        }
        if(itemExist.agility) {
            itemType = 'agility';
        }
        if(itemExist.intellect) {
            itemType = 'intellect';
        }

        newBoughtItemFromMarket = new BoughtItemFromMarket({
            title: itemExist.title,
            user_id: user._id,
            username: user.username,
            user_img: user.heroImg,
            item_id: itemExist._id,
            item_img: item.img,
            item_type: itemType,
            spent_gold: itemExist.price,
            created_at: dayjs().format('YYYY MM DD h:mm:ss A')
        });
       
        newBoughtItemFromMarket.save().then(() => {
            io.emit('boughtItemFromMarket');
        });
    });
}