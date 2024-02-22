const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minLength:[8,"length is not enough"]
    }
});
const userdata = mongoose.model('userdata',userSchema);
module.exports = userdata;