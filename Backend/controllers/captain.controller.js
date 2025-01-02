const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator');
const captainService = require('../services/captain.services');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname ,email, password,vehicle } = req.body;
    const hashedPassword = await captainService.hashPassword(password);

    const isCaptain = await captainModel.findOne({ email });
    if (isCaptain) {
        return res.status(400).send({ message: 'Captain already exists' });
    }

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plateNumber: vehicle.plateNumber,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = await captainService.generateToken(captain);
    console.log(token);
    res.status(201).json({captain, token});
    // res.save()
    // return captain;
}

module.exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email and password' });
    }

    const validPassword = await captain.comparePassword(password);
    if (!validPassword) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const token = captain.generateAuthToken();
    console.log(token);
    res.cookie('token',token);

    res.status(200).send({captain, token});
}

module.exports.getProfile = async(req, res)=> {
    const captain = req.captain;
    res.status(200).json(captain);
}

module.exports.logout = async(req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Captain logged out successfully' });
}



 







