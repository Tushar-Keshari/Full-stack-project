const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddelware = require('../middlewares/auth.middlewares');


router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plateNumber').isLength({min:3}).withMessage('Plate number must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type'),
    body('location.latitude').isInt().withMessage('Latitude must be a number'),
    body('location.longitude').isInt().withMessage('Longitude must be a number')
],captainController.register);

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long')
],captainController.login);

router.get('/profile',authMiddelware.authCaptain,captainController.getProfile);

router.get('/logout',authMiddelware.authCaptain,captainController.logout);

module.exports = router;

