const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');


module.exports.createCaptain = async({firstname, lastname, email, password,
        color,plateNumber,capacity,vehicleType,
    }) => {

    if(!email || !password || !firstname || !color || !capacity || !vehicleType || !plateNumber){
        throw new Error('All fields are required');
    }

    const captain = new captainModel({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plateNumber,
            capacity,
            vehicleType
        }
    });

    console.log(captain);
    return captain;
}

module.exports.generateToken = async (user) => {
    const token = user.generateAuthToken();
    return token;
}

module.exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}