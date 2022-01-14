const ejs = require('ejs');
const db = require('../models/dbModel');
var session = require('express-session');

exports.index = (req, res)=>{
    res.render('index');
}

exports.chat = (req, res)=>{
    session.nickname = req.body.nickname;
    session.roomname = req.body.room;
    res.render('chat');
}
