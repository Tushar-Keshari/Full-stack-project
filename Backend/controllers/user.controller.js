const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');


//register controller 
module.exports.register = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({error:errors.array()});
    }

    const {fullname, email, password} = req.body;
    const hashedPassword = await userService.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname, 
        lastname:fullname.lastname, 
        email, 
        password: hashedPassword
    });

    const token = await userService.generateToken(user);
    // console.log(token);
    res.status(201).send({user, token});
}

//login controller
module.exports.login = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({error:errors.array()});
    }

    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({error:'Invalid email and password'});
    }

    const validPassword = await user.comparePassword(password);

    if(!validPassword){
        return res.status(401).json({error:'Invalid password'});
    }

    const token = user.generateAuthToken();

    res.cookie('token',token);

    res.status(200).send({user, token});
}

//get profile controller
module.exports.getProfile = async (req,res) => {
    const user = await userModel.findById(req.user._id);
    res.send(user);
}

//logout controller
module.exports.logout = async (req,res) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    const blacklistToken = new blacklistTokenModel({token});
    await blacklistToken.save();


    res.status(200).json({message: 'Logged out successfully'});
} 