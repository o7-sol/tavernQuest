const express = require('express');
const router = express.Router();
const striptags = require('striptags');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const dayjs = require('dayjs');
const JWT = require('jsonwebtoken');

// Functions
const capitalize = (string) => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Middlewares
const Authenticated = require('../middlewares/authenticated');

// Models
const User = require('../models/User');

router.post('/api/get-user-info', Authenticated, async(req, res) => {
    try {
        const token = await req.body.token;
        const decoded = JWT.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({_id: decoded.userid, username: decoded.username});
        if(!user) {
            return console.log('User was not found after page refresh');
        }
        res.json({user});
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/check-user-level', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        if(!user) {
            return console.log('User does not exist');
        }
        res.json({level: user.level});
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/create-account', async(req, res) => {
    try {
        const username = striptags(req.body.username);
        const password =  striptags(req.body.password);
        const type = striptags(req.body.type);
        let heroImage = '';
        let strength = 0;
        let vitality = 0;
        let intellect = 0;
        let agility = 0;

        if(type === 'Barbarian') {
            heroImage = 'barbarian.png';
            strength = 20;
            vitality = 10;
            agility = 10;
            intellect = 10;
        } else if (type === 'Necromancer') {
            heroImage = 'necromancer.png';
            strength = 10;
            vitality = 10;
            agility = 10;
            intellect = 20;            
        } else {
            heroImage = 'pirate.png';
            strength = 10;
            vitality = 20;
            agility = 10;
            intellect = 10;
        }

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                if(hash) {
                    const newUser = User({
                        username: capitalize(username),
                        password: hash,
                        class: type,
                        heroImg: heroImage,
                        health: 1000,
                        strength,
                        vitality,
                        agility,
                        intellect,
                        level: 1,
                        experience: 0,
                        gold: 300,
                        items: [],
                        bank: [],
                        role: 'User',
                        token: '',
                        createdAt: dayjs().format('YYYY MM DD h:mm:ss A')
                    });

                    newUser.save().then(user => {
                        if(user) {
                            res.json({success: 'User was created successfully. Now you can sign in.'})
                        } else {
                            console.log(error);
                        }
                    });
                } else {
                    console.log(err);
                }
            });
        });

    } catch (error) {
        console.log(error);
    }
});

router.post('/api/sign-in', async(req, res) => {
    try {
        const username = striptags(capitalize(req.body.username));
        const password = striptags(req.body.password);
        const user = await User.findOne({username});

        if(!user) {
           return res.json({error: 'Something went wrong. Try again.'});
        }

        bcrypt.compare(password, user.password).then((result) => {
            if(result) {
                const token = JWT.sign({ username: user.username, userid: user._id }, process.env.SECRET_KEY);
                user.token = token;
                user.save();
                res.json({success: 'Logged in', token: user.token, user});
            }
        });
    
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;