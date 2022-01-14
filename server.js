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
    getRoomUsers,
    userLeave,
    getCurrentUser
} = require('./API/utils/users.js');
const {
    formatMessage
} = require('./API/utils/messages.js');

app.use('/', router);

io.on('connection',(socket)=>{
    // client connected to room
    socket.on('JoinToRoom', ()=>{
        const user = joinUser(socket.id, session.username, session.roomname );
        // join the room
        socket.join(user.room);
        
        // update room info
        io.to(user.room).emit('updateRoom',session.roomname, getRoomUsers(session.roomname));
        // wellcome current user
        socket.emit('message',formatMessage('System', `${user.name}, wellcome in the ${user.room} room !`) );
        // broadcast another user
        socket.broadcast.to(user.room).emit('message', formatMessage('System',`User ${user.name} joined to the room !`) )
    });
    // listen for messages
    socket.on('message', (msg)=>{
        const user = getCurrentUser(socket.id);
        // broadcast message to another users
        io.to(user.room).emit('message',formatMessage(user.name, msg));
        //socket.broadcast.to(user.room).emit('message',formatMessage(user.name, msg));
    });

    // when anybody typing....
    socket.on('typing',(id)=>{
        const user = getCurrentUser(id);
        socket.broadcast.to(user.room).emit('typing',`${user.name} is typing...`);
    });

    // client leave the room
    socket.on('disconnect',()=>{
        const user = userLeave(socket.id);
        // broadcast to another users
        io.to(user.room).emit('message',formatMessage('System',`${user.name} has left the room.`));
        // update room indoformation to other users
        io.to(user.room).emit('updateRoom',user.room, getRoomUsers(user.room));
    });
});
