const express = require('express');
const router = express.Router();
const JWT = require('jsonwebtoken');
const dayjs = require('dayjs');

// Models
const Item = require('../models/Item');
const ItemDiscount = require('../models/ItemDiscount');

// Middlewares
const Authenticated = require('../middlewares/authenticated');

router.get('/api/user-items', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        items = await user.items;
        res.json({items});
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/buy-item/:id', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const item = await Item.findById(req.body.itemID);
        if(user.gold === item.price || user.gold > item.price) {
            user.items.push({
                title: item.title,
                img: item.img,
                power: item.power,
                strength: item.strength,
                agility: item.agility,
                vitality: item.vitality,
                intellect: item.intellect,
                price: item.price,
                createdAt: dayjs().format('YYYY MM DD h:mm:ss A')
            });
            user.save();
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