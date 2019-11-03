const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');
const striptags = require('striptags');
const validator = require('validator');

// Functions
const capitalize = (string) => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Middlewares
const Authenticated = require('../middlewares/authenticated');

// Models
const Guild = require('../models/Guild');
const GuildAction = require('../models/GuildAction');
const GuildMessage = require('../models/GuildMessage');

router.post('/api/apply-to-guild', Authenticated, async (req, res) => {
    try {
        const guildID = striptags(req.body.guildID);
        const guild = await Guild.findById(guildID);
        const alreadyMember = await Guild.findOne({"members.username": req.user.username});

        if(!guild) {
            return console.log('Guild does not exist.');
        }

        if(alreadyMember) {
            return res.json({error: 'You are already member of a guild.'});
        }

        guild.members.push({
            username: req.user.username,
            createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss')
        });

        guild.save().then(member => {
            if(!member) {
                return console.log('Guild member was not saved.');
            }
            res.json({success: true});
        });
        
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/guilds', Authenticated, async (req, res) => {
    try {
        const guilds = await Guild.find().sort('-experience');
        res.json({guilds});
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/guild-messages', Authenticated, async (req, res) => {
    try {
        const guild = await Guild.findOne({"members.username": req.user.username});

        if(!guild) {
            return console.log('User does not belong to any guild');
        }

        const messages = await GuildMessage.find({guild: guild._id}).sort('-createdAt').limit(10);

        res.json({guildMessages: messages});

    } catch (error) {
        console.log(error);
    }
});

router.post('/api/send-guild-message', Authenticated, async (req, res) => {
    try {
        const user = await req.user;
        const message = striptags(req.body.message);
        const guildMember = await Guild.findOne({"members.username": user.username});

        if(!guildMember) {
            return console.log('User is not a member of a guild');
        }

        if(message.length < 3) {
            return res.json({error: 'Message is too short. Minimum length is 3 characters.'});
        }

        if(message.length > 100) {
            return res.json({error: 'Message is too long. Maximum length is 100 characters.'});
        }

        const messagePayload = {
            username: user.username,
            message,
            guild: guildMember._id,
            createdAt: dayjs().format('YYYY-MM-DD HH:mm')
        }
        
        const newMessage = GuildMessage(messagePayload);
        newMessage.save().then((message) => {
            if(!message) {
               return console.log('Message was not sent.');
            }
            res.json({message: message});
        });

    } catch (error) {
        console.log(error);
    }
});


router.post('/api/borrow-guild-gold', Authenticated, async (req, res) => {
    try {
        const user = await req.user;
        const goldAmount = striptags(req.body.gold);
        const guild = await Guild.findOne({
            "members.username": user.username
        });

        if (!validator.isNumeric(goldAmount)) {
            return console.log('Data is not numbers!');
        }

        if (parseInt(goldAmount) > 150 || parseInt(goldAmount) < 1) {
            return res.json({
                error: 'You cannot borrow more than 150 gold!'
            });
        }

        guild.gold -= parseInt(goldAmount);
        user.gold += parseInt(goldAmount);

        guild.latestActivity.push({
            username: user.username,
            img: user.heroImg,
            borrowGold: true,
            amount: goldAmount,
            createdAt: dayjs().format('YYYY-MM-DD'),
        });

        const newGuildAction = await GuildAction({
            username: user.username,
            img: user.heroImg,
            borrowGold: true,
            amount: goldAmount,
            createdAt: dayjs().format('YYYY-MM-DD'),
        });

        newGuildAction.save().then(async () => {
            const timesBorrowedToday = await GuildAction.find({
                username: user.username,
                borrowGold: true,
                createdAt: dayjs().format('YYYY-MM-DD') 
            }).countDocuments();

            if (timesBorrowedToday > 3) {
                newGuildAction.remove();
                return res.json({
                    error: 'You reached your borrow limit for today.'
                });
            }

            guild.save().then(() => {
                user.save().then(() => {
                    res.json({
                        success: 'You have borrowed gold successfully',
                        gold: user.gold
                    });
                });

            });

        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/fill-guild-bank', Authenticated, async (req, res) => {
    try {
        const user = await req.user;
        const gold = striptags(req.body.gold);
        const guild = await Guild.findOne({
            "members.username": user.username
        });

        if (!guild) {
            return console.log('Guild not found');
        }

        if (!validator.isNumeric(gold)) {
            return console.log('Only numbers allowed');
        }

        if (gold > user.gold || gold === 0 || gold < 1) {
            return console.log('Too high amount or too low.');
        }

        guild.gold += parseInt(gold);
        user.gold -= parseInt(gold);
        guild.latestActivity.push({
            username: user.username,
            img: user.heroImg,
            gold: true,
            amount: gold,
            createdAt: dayjs().format('YYYY-MM-DD'),
        });

        const newGuildAction = await GuildAction({
            username: user.username,
            img: user.heroImg,
            gold: true,
            amount: gold,
            createdAt: dayjs().format('YYYY-MM-DD'),
        });

        newGuildAction.save();
        guild.save().then(() => {
            user.save();
            res.json({
                success: true,
                gold: user.gold,
                user
            });
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/guild-announcement', Authenticated, async (req, res) => {
    try {
        const user = await req.user;
        const announcement = striptags(req.body.announcement);
        const guild = await Guild.findOne({
            leader: user.username
        });

        if (validator.isEmpty(announcement)) {
            return console.log('Announcement is not alphanumeric');
        }

        if (!guild) {
            return console.log('Guild leader not found');
        }

        guild.announcement = capitalize(announcement);
        guild.announcement_createdAt = dayjs().format('YYYY-MM-DD');
        guild.save();

        res.json({
            success: true
        });

    } catch (error) {
        console.log(error);
    }
});

router.get('/api/guild-info', Authenticated, async (req, res) => {
    try {
        const user = await req.user;
        const guild = await Guild.findOne({
            "members.username": user.username
        });
        if (!guild) {
            return console.log('Guild not found');
        }
        res.json({
            guild
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/guild-member', Authenticated, async (req, res) => {
    try {
        const user = await req.user;
        const guild = await Guild.findOne({
            "members.username": user.username
        });

        if (guild) {
            return res.json({
                success: true
            });
        }
        res.json({
            notMember: true
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/leader-of-guild', Authenticated, async (req, res) => {
    try {
        const guild = await Guild.findOne({
            leader: req.user.username
        });
        if (guild) {
            return res.json({
                success: 'success'
            });
        }
        res.json({
            notLeader: true
        })
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/create-guild', Authenticated, async (req, res) => {
    try {
        const user = await req.user;
        const title = striptags(req.body.title);
        const guildsCount = await Guild.find().count();
        const guildExist = await Guild.findOne({
            title
        });

        if(user.level < 15) {
            return res.json({
                errMsg: 'Level 15 is required to be able to create a guild.'
            });
        }

        if (guildExist) {
            return res.json({
                errMsg: 'Guild with this title already exists.'
            });
        }

        if (!validator.isAlphanumeric(title)) {
            return res.json({
                errMsg: 'Title is not alphanumeric.'
            });
        }

        const guildPayload = {
            title: capitalize(title),
            gold: 0,
            experience: user.experience,
            leader: user.username,
            leaderImg: user.heroImg,
            leaderLevel: user.level,
            requiredLevel: 0,
            announcement: '',
            announcement_createdAt: '',
            wins: user.wins,
            loses: user.loses,
            rank: guildsCount + 1,
            members: [],
            createdAt: dayjs().format('YYYY MM DD h:mm:ss A')
        }

        const newGuild = await Guild(guildPayload);
        newGuild.members.push({
            username: user.username,
            createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss')
        });
        newGuild.save().then(guild => {
            if (guild) {
                res.json({
                    successMsg: `${title} guild was created successfully.`
                })
            }
        })

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;