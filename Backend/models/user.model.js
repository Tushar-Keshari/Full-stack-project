const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const userSchema = new Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3,'First name must be at least 3 characters long']
        },
        lastname:{
            type: String,
            minlength: [3,'Last name must be at least 3 characters long']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        select:true
    },
    socketId:{
        type: String
    },
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.static.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}  

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;