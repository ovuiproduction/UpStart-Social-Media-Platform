const mongoose = require('mongoose');

const msgSchema = mongoose.Schema({
    semail:{
        type:String,
        required:true
    },
    remail:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        default:0
    }
});

const msgcol = mongoose.model('msgcol',msgSchema);

module.exports = msgcol;