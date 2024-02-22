const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    like:{
        type:Number,
        default:0
    }
});

const Postcol = mongoose.model('Postcol',postSchema);

module.exports = Postcol;