const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Access Denied');
    }

    const blacklistToken = await blacklistTokenModel.findOne({ token });
    if (blacklistToken) {
        return res.status(401).send('Access Denied');
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;
        return next();
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Access Denied');
    }

    const blacklistToken = await blacklistTokenModel.findOne({ token });
    if (blacklistToken) {
        return res.status(401).send('Access Denied');
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)

        req.captain = captain;
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }

} 