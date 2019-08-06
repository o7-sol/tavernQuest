const express = require('express');
const router = express.Router();
const JWT = require('jsonwebtoken');
const dayjs = require('dayjs');
const uuidv1 = require('uuid/v1');

// Models
const Item = require('../models/Item');
const ItemDiscount = require('../models/ItemDiscount');

// Middlewares
const Authenticated = require('../middlewares/authenticated');

// Latest items
const getLatestItems = (items) => {
    return items.slice(0, 36);
};

router.post('/api/place-item-to-bank', Authenticated, async(req, res) => {
    
});

router.get('/api/user-bank', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        items = await user.items.slice(36, 100);
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
        if(!item) {
            return console.log('Item do not exist');
        }
        if(item.level > user.level) {
            return console.log('Item level is too high');
        }
        if(item.stock < 1) {
            return console.log('Item is out of stock');
        }
        if(user.gold >= item.price && user.level >= item.level && item.stock > 0) {
            const itemPayload = {
                _id: uuidv1(),
                title: item.title,
                img: item.img,
                power: item.power,
                strength: item.strength,
                agility: item.agility,
                vitality: item.vitality,
                intellect: item.intellect,
                price: item.price,
                createdAt: dayjs().format('YYYY MM DD h:mm:ss A')                
            }
            user.items.push(itemPayload);
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