const JWT = require('jsonwebtoken');
const User = require('../models/User');

const authenticated = async(req, res, next) => {
        const token = await req.header('authorization').replace('Bearer', '').trim();
        const decoded = await JWT.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({username: decoded.username, _id: decoded.userid});
        if(user) {
            req.user = user;
            next();
        } else {
            console.log('User is not found');
        } 
}

module.exports = authenticated;