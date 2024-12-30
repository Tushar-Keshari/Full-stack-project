const express = require('express');
const router = express.Router();    
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddelware = require('../middlewares/auth.middlewares');

router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long')
],userController.register);


router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long')
],userController.login);

router.get('/profile',authMiddelware.authUser,userController.getProfile);

router.get('/logout',authMiddelware.authUser,userController.logout);

module.exports = router;