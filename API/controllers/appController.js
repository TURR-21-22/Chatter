const ejs = require('ejs');
const db = require('../models/dbModel');
var session = require('express-session');
//var loggedusers = [];

let username = '';
let roomname = '';

exports.index = (req, res)=>{
    res.render('index');
}

exports.chat = (req, res)=>{
    res.render('chat');
}

exports.auth = (req, res)=>{
    let errorMsg = "";
    username = req.body.username;
	var password = req.body.password;
    roomname = req.body.room;
    if (username && password) {
        db.query('SELECT * FROM users WHERE name = ? AND password = ?', [username, password], (err, results)=> {
            if (err) throw err;
            if (results.length > 0) {
                if ( loggedUsers.includes(username) ) {
                    errorMsg = [`User: ${username} already logged in !`];
                    res.render('error',{errorMsg});
                } else {
                    loggedUsers.push(username);
                    session.username = username;
                    session.roomname = roomname;
                    res.redirect('/chat');
                }
            } else {
                errorMsg = [`Wrong credentials !`,`Or user: ${username} not registered`];
                res.render('error',{errorMsg});
            }
        });
    } else {
        errorMsg = [`No user name or password given !`,`Please enter user name and password !`];
        res.render('error',{errorMsg});
    }
}

exports.register = (req, res)=>{
    res.render('register');
}

exports.registerNewUser = (req,res)=> {
    var name = req.body.name,
    pwd1 = req.body.pwd1,
    pwd2 = req.body.pwd2;
    if (pwd1 != pwd2) {
        res.send('A megadott jelszavak nem egyeznek!');
    } else {
        db.query(`SELECT id FROM users WHERE name='${name}'`, (err, results)=>{
            if (err) throw err;
            if (results.length > 0)
            {
                res.send('Ez a felhasználónév már regisztrált!');
            }
            else
            {
                db.query(`INSERT INTO users VALUES(null, '${name}', '${pwd1}')`, (err)=>{
                    if (err) throw err;
                });
                res.redirect('/');
            }
        });
    }
}