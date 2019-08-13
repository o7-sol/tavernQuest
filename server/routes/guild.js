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

router.post('/api/fill-guild-bank', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const gold = await striptags(req.body.gold);
        const guild = await Guild.findOne({"members.username": user.username});

        if(!guild) {
            return console.log('Guild not found');
        }

        if(!validator.isNumeric(gold)) {
            return console.log('Only numbers allowed');
        }

        if(gold > user.gold || gold === 0 || gold < 1) {
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
        guild.save().then(() => {
            user.save();
            res.json({success: true});
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/guild-announcement', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const announcement = await striptags(req.body.announcement);
        const guild = await Guild.findOne({leader: user.username});

        if(validator.isEmpty(announcement)) {
            return console.log('Announcement is not alphanumeric');
        }

        if(!guild) {
            return console.log('Guild leader not found');
        }

        guild.announcement = await capitalize(announcement);
        guild.announcement_createdAt = await dayjs().format('YYYY-MM-DD');
        guild.save();

        res.json({success: true});

    } catch (error) {
        console.log(error);
    }
});

router.get('/api/guild-info', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const guild = await Guild.findOne({"members.username": user.username});
        if(!guild) {
           return console.log('Guild not found');
        }
        res.json({guild});
    } catch (error) {
        console.log(error);
    }
});

router.get('/api/guild-member', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const guild = await Guild.findOne({"members.username": user.username});

        if(guild) {
            return res.json({success: true});
        }
        res.json({notMember: true});
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/leader-of-guild', Authenticated, async(req, res) => {
    try {
        const guild = await Guild.findOne({leader: req.user.username});
        if(guild) {
          return res.json({success: 'success'});
        }
        res.json({notLeader: true})
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/create-guild', Authenticated, async(req, res) => {
    try {
        const user = await req.user;
        const title = await striptags(req.body.title);
        const guildsCount = await Guild.find().count();
        const guildExist = await Guild.findOne({title});

        if(guildExist) {
            return res.json({errMsg: 'Guild with this title already exists.'});
        }

        if(!validator.isAlphanumeric(title)) {
            return console.log('Title is not alphanumeric');
        }

        const guildPayload = {
            title: capitalize(title),
            gold: 0,
            experience: user.experience,
            leader: user.username,
            leaderImg: user.heroImg,
            announcement: '',
            announcement_createdAt: '',
            wins: user.wins,
            loses: user.loses,
            rank: guildsCount+1,
            members: [],
            createdAt: dayjs().format('YYYY MM DD h:mm:ss A')
        }

        const newGuild = await Guild(guildPayload);
        newGuild.members.push({username: user.username});
        newGuild.save().then(guild => {
            if(guild) {
                res.json({successMsg: `${title} guild was created successfully.`})
            }
        })

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;