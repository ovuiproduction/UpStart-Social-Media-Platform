const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const userdata = require('./models/userdata');
const startupdata = require('./models/startupdata');
const mentorprograms = require('./models/mentorprograms')
const comments = require('./models/comments');
const multer = require('multer');
const msgcol = require('./models/msg');


mongoose.connect("mongodb://localhost:27017/usersdb");

const storage = multer.memoryStorage();

const app = express();

app.set('view engine','ejs');
app.use(express.json());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
const port = 5000;

app.get('/',(req,res)=>{
    res.render("index");
});

app.post('/authuser',async(req,res)=>{
    try{
    let response = await userdata.findOne({email:req.body.email});
    if(response != null){
        if(response.password == req.body.password){
            res.send({status:"user Authenticated Successfully"});
        }else{
            res.send({status:"password incorrect"});
        }
    }else{
        res.send({status:"user not found"});
    }
    }catch(err){
        res.send({status:err});
    }
});

app.post('/registeruser',async(req,res)=>{
    console.log("request arrived");
    let user = new userdata();
    user.name = req.body.name;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.username = req.body.username;
    user.password = req.body.password;
    let result = await user.save();
    console.log(result);
    res.send("user registered successfully");
});


app.post('/registerstartup',async(req,res)=>{
    console.log("request arrived for start up");
    let startup = new startupdata();
    startup.startupname = req.body.startupname;
    startup.ownername = req.body.ownername;
    startup.discription = req.body.discription;
    startup.domain = req.body.domain;
    startup.joiningyear = req.body.joiningyear;
    startup.email = req.body.email;
    startup.phone = req.body.phone;
    startup.keypoints = req.body.keypoints;
    let result = await startup.save();
    console.log(result);
    res.send("user registered successfully");
});

app.post('/search',async(req,res)=>{
    console.log(req.body.startupname);
    let response = await startupdata.find({startupname:req.body.startupname});
    console.log(response);
    res.send({data:response,status:"ok"});
});

app.post('/searchmentor',async(req,res)=>{
    console.log(req.body.programname);
    let response = await mentorprograms.find({name:req.body.programname});
    console.log(response);
    res.send({data:response,status:"ok"});
});


app.post('/displayBlogs',async(req,res)=>{
    let response = await startupdata.find({});
    res.send({data:response,status:"ok"});
});


app.post('/startup',async(req,res)=>{
    let response = await startupdata.findById({_id:req.body.id});
    res.send({data:response,status:"ok"});
});


app.post('/displaymentorprograms',async(req,res)=>{
    let response = await mentorprograms.find({});
    res.send({data:response,status:"ok"});
});

app.post('/registerprogram',async(req,res)=>{
    let program = new mentorprograms();
    program.name = req.body.programname;
    program.qualification = req.body.qualification;
    program.date = req.body.date;
    program.time = req.body.time;
    program.topic = req.body.topic;
    program.pricing = req.body.pricing;
    program.phone = req.body.phone;
    program.mode = req.body.mode;
    program.keypoints = req.body.keypoints;
    program.discription = req.body.discription;
    let result = await program.save();
    console.log(result);
    res.send({data:result,status:"ok"});
});

app.post('/comments/:id',async(req,res)=>{
    const responses = await comments.find({pid:req.params.id});
    console.log("array : "+responses);
    res.send({data:responses});
});

app.post('/postcomments/:id',async(req,res)=>{
    const text = req.body.comment;
    let comment = new comments();
    comment.text = text;
    comment.pid = req.params.id;
    let response = await comment.save();
    res.send(response);
});

app.post('/message',async(req,res)=>{
    const response = await msgcol.find({});
    res.send({data:response,status:"ok"});
});

app.post('/savemsg',async(req,res)=>{
    let msg = new msgcol();
    msg.semail = req.body.semail;
    msg.remail = req.body.remail;
    msg.msg = req.body.msg;
    let result = msg.save();
    res.send({data:result,status:"ok"});
});
app.listen(port,(req,res)=>{
    console.log(`server is live on port ${port}`);
});