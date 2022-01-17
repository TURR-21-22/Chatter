require('dotenv').config();
const express = require('express');
var session = require('express-session');
const ejs = require('ejs');
const app = express();
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;
const server = express()
  .use(app)
  .listen(PORT, () => console.log(`Listening Socket on ${ PORT }`));
const router = require('./API/routes/router');

const io = socketio(server);
const db = require('./API/models/dbModel');

app.set('views', './API/views/');
app.set('view engine','ejs');
app.use(express.static('./API/public'));
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

global.loggedUsers = [];

const { 
    joinUser,
    makeUser,
    getRoomUsers,
    userLeave,
    getCurrentUser
} = require('./API/utils/users.js');
const {
    formatMessage
} = require('./API/utils/messages.js');

app.use('/', router);

var history = {
    main: [],
    frontend: [],
    backend: [],
    desktop: [],
    mobile: [],
    web: []
};

io.on('connection',(socket)=>{

    socket.on('JoinToRoom', ()=>{
        const user = joinUser(socket.id, session.username, session.roomname );
        socket.join(user.room);
        socket.emit('updateRoom',user.room, getRoomUsers(user.room),user.name);
        const clients = io.sockets.sockets;
        clients.forEach(e => {
            var client = getCurrentUser(e.id);
            if (user.id != client.id ) {
                io.to(client.room).emit('updateRoom2',client.room, getRoomUsers(client.room));
            }
        });
        roomHistory(user.room);
 });

    socket.on('message', (msg)=>{
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message',formatMessage(user.name, msg));
        let text = formatMessage(user.name, msg);
        db.query(`INSERT INTO chat_room_${user.room} VALUES(null, '${text.username}','${text.text}',CURDATE() )`);
    });

    //switching room
    socket.on('switch',(room)=>{
        socket.leave(session.roomname);
        const user = makeUser(socket.id, session.username, room );
        socket.join(room);
        io.to(user.room).emit('updateRoom',user.room, getRoomUsers(user.room),user.name);
        const clients = io.sockets.sockets;
        clients.forEach(e => {
            var client = getCurrentUser(e.id);
            socket.emit('updateRoom2',client.room, getRoomUsers(client.room));
        });
        roomHistory(user.room);
    });

    socket.on('typing',(id)=>{
        const user = getCurrentUser(id);
        socket.broadcast.to(user.room).emit('typing',`${user.name} is typing...`);
    });

    socket.on('disconnect',()=>{
        const user = userLeave(socket.id);
        io.to(user.room).emit('message',formatMessage('System',`${user.name} has left the room.`));
        io.to(user.room).emit('updateRoom',user.room, getRoomUsers(user.room),user.name);
    });
});

function roomHistory(room) {
    history[room] = [];
    db.query(`SELECT * FROM chat_room_${room}`)
    .on('result', (data)=>{
        history[room].push(data);
    })
    .on('end', ()=> {
        io.to(room).emit('history',history[room]);
    })
}