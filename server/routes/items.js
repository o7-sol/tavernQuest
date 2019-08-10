const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');
const uuidv1 = require('uuid/v1');
const _ = require('lodash');

// Models
const Item = require('../models/Item');
const ItemDiscount = require('../models/ItemDiscount');
const StackExchangeItems = require('../models/StackExchange');

// Middlewares
const Authenticated = require('../middlewares/authenticated');

// Latest items
const getLatestItems = (items) => {
    return items.slice(0, 14);
};

router.get('/api/stack-exchange-elite', Authenticated, async(req, res) => {
    try {
        const items = await StackExchangeItems.find({elite: true}).sort('createdAt');
        res.json({items});
    } catch (error) {
        console(error);
    }
});

router.get('/api/stack-exchange', Authenticated, async(req, res) => {
    try {
        const items = await StackExchangeItems.find({elite: false}).sort('createdAt');
        res.json({items});
    } catch (error) {
        console(error);
    }
});

router.post('/api/place-item-from-inventory-to-bank', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const itemID = await req.body.itemID;
        const index = await req.body.index;

        const item = await user.items.find(x => x.id === itemID);

        if(!item) {
            return console.log('Item not found');
        }

        user.bank.push(item);
        user.items.splice(index, 1);
        user.save();
        res.json({success: 'Item was sent to the bank.', item});

    } catch (error) {
        console.log(error);
    }
});

router.post('/api/place-item-to-bank', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const itemID = await req.body.itemID;
        const itemIndex = await req.body.index;

        const item = await user.items.find(x => x.id === itemID);
        
        if(itemIndex === undefined || item === undefined) {
            return console.log('Item does exist');
        }
        user.bank.push(item);
        user.items.splice(itemIndex, 1);

        user.save();
        res.json({'success': 'ADDED TO BANK'})
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/place-item-to-inventory', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const itemID = await req.body.itemID;
        const itemIndex = await req.body.index;

        const item = await user.bank.find(x => x.id === itemID);

        if(itemIndex === undefined || item === undefined) {
            return console.log('Item does not exist');
        }

        if(user.items.length < 14) {
            user.items.push(item);
            user.bank.splice(itemIndex, 1);
            user.save();
            res.json({'success': 'ADDED TO INVENTORY'})
        } else {
            console.log('Inventory is full');
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/user-bank', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const items = await user.bank;
        res.json({items});  
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/user-items', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        items = await getLatestItems(user.items);
        res.json({items});
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/buy-item/:id', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const item = await Item.findById(req.body.itemID);
        let elite = await false;
        if(!item) {
            return console.log('Item do not exist');
        }
        if(item.level > user.level) {
            return console.log('Item level is too high');
        }
        if(item.stock < 1) {
            return console.log('Item is out of stock');
        }
        if(item.elite) {
            elite = true;
        }
        if(user.gold >= item.price && user.level >= item.level && item.stock > 0) {
            const itemPayload = {
                id: uuidv1(),
                title: item.title,
                img: item.img,
                power: item.power,
                strength: item.strength,
                agility: item.agility,
                vitality: item.vitality,
                intellect: item.intellect,
                price: item.price,
                elite,
                createdAt: dayjs().format('YYYY MM DD h:mm:ss A')                
            }
            if(user.items.length < 14) {
                user.items.push(itemPayload);
            } else {
                user.bank.push(itemPayload);
            }
            user.save();
            res.json({successMsg: 'Gold transaction successful. Item was shipped.', item: itemPayload});
            console.log('Item bought successfully');
        } else {
            console.log('User do not have enough gold to buy item');
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/items-discounts', async(req, res) => {
    try {
        const discounts = await ItemDiscount.find().sort('createdAt').limit(5);
        res.json({discounts});
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/strength-items', async(req, res) => {
    try {
        const items = await Item.find({strength: true}).sort('price');
        res.json({items});
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/agility-items', async(req, res) => {
    try {
        const items = await Item.find({agility: true}).sort('price');
        res.json({items});
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/intellect-items', async(req, res) => {
    try {
        const items = await Item.find({intellect: true}).sort('price');
        res.json({items});
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/vitality-items', async(req, res) => {
    try {
        const items = await Item.find({vitality: true}).sort('price');
        res.json({items});
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/latest-items', async(req, res) => {
    try {
        const items = await Item.find().sort('-createdAt').limit(5);
        res.json({items});
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;