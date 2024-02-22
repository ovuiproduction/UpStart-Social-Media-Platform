const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
    text:{
        type:String,
    },
    pid:{
        type:String
    }
});

const comments = mongoose.model('comments',commentsSchema);

module.exports = comments;