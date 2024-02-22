const mongoose = require('mongoose');

const mentorProgramsDataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mentorname:{
        type:String
    },
    video:{
        type:String
    },
    qualification:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    },
    time:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    pricing:{
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
    },
    mode:{
        type:String,
        required:true
    }
});
const mentorprograms = mongoose.model('mentorprograms',mentorProgramsDataSchema);
module.exports = mentorprograms;