const mongoose = require('mongoose');

const startupDataSchema = new mongoose.Schema({
    startupname:{
        type:String,
        required:true
    },
    ownername:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    joiningyear:{
        type:Number,
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
    keypoints:{
        type:String,
        required:true
    }
});
const startupdata = mongoose.model('startupdata',startupDataSchema);
module.exports = startupdata;