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

const oldroom = '';

io.on('connection',(socket)=>{
    // client connected to room
    socket.on('JoinToRoom', ()=>{
        const user = joinUser(socket.id, session.username, session.roomname );
       // join the room
        socket.join(user.room);
        
        // update room info
        //io.to(user.room).emit('updateRoom',session.roomname, getRoomUsers(session.roomname), );
        
        socket.emit('updateRoom',user.room, getRoomUsers(user.room),user.name,user.id);
        //socket.broadcast.to(socket.room).emit('updateRoom2', getRoomUsers(socket.room));

        //io.to(user.id).emit('updateRoom',user.room, getRoomUsers(user.room) );
        // wellcome current user
    

        //socket.emit('message',formatMessage('System', `${user.name}, wellcome in the ${user.room} room !`) );
        // broadcast another user
        //socket.broadcast.to(user.room).emit('message', formatMessage('System',`User ${user.name} joined to the room !`) );
    });
    // listen for messages
    socket.on('message', (msg)=>{
        const user = getCurrentUser(socket.id);
        // broadcast message to another users
        io.to(user.room).emit('message',formatMessage(user.name, msg));
        //socket.broadcast.to(user.room).emit('message',formatMessage(user.name, msg));
        let text = formatMessage(user.name, msg);
        db.query(`INSERT INTO chat_room_${user.room} VALUES(null, '${text.username}','${text.text}',CURDATE() )`);
        //db.query(`INSERT INTO chat_room_${user.room} VALUES(null, '${formatMessage(user.name, msg)}'`);
    });

    //switching room
    socket.on('switch',(room)=>{
        socket.leave(socket.room);
        const user = makeUser(socket.id, session.username, room );
        socket.join(room);
        socket.emit('updateRoom',user.room, getRoomUsers(user.room),user.name,user.id);
        socket.broadcast.to(socket.room).emit('updateRoom',socket.room, getRoomUsers(socket.room),socket.name,socket.id);
        //socket.broadcast.to(socket.room).emit('updateRoom2',socket.room, getRoomUsers(socket.room));
        socket.room = room;
        //const rooms = ['Main','Frontend','Backend','Desktop','Mobile','Web'];
        //socket.emit('updaterooms', rooms);
        
        //io.to(user.room).emit('updateRoom',user.room, getRoomUsers(user.room) );
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
        io.to(user.room).emit('updateRoom',user.room, getRoomUsers(user.room),user.name,user.id);
    });
});
