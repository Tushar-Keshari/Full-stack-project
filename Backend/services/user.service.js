const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');


module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if(!firstname || !email || !password) {
        throw new Error('Missing required fields');
    }
    const user = await userModel.create({
        fullname: {
            firstname, lastname
        }, 
        email, 
        password
    });

    return user;
}

module.exports.generateToken = async (user) => {
    const token = user.generateAuthToken();
    return token;
}

module.exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}