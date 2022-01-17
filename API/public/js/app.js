let socket = io();
let roomname = document.querySelector('#roomname');
let userslist = document.querySelector('#userslist');
let chatMessages = document.querySelector('.chatmessages');
let msgTxt = document.querySelector('input[name="msgTxt"]');
let sendBtn = document.querySelector('#sendBtn');
let logout = document.querySelector('#logout');
let feedbackbox = document.querySelector('#feedback');
let console_label = document.querySelector('#console_label');


// ----------- EMIT

// clienmt connected to server
socket.emit('JoinToRoom');

//switch room
document.querySelectorAll('.switchRoom').forEach(item => {
    item.addEventListener('click', event => {
        socket.emit('switch',item.dataset.room);
    })
})

logout.addEventListener('click', (event)=>{
    socket.emit('disconnect');
});

// send message
sendBtn.addEventListener('click', (event)=>{
    sendMessage();
});

msgTxt.addEventListener("keyup", (event)=> {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// when user typing
msgTxt.addEventListener("keypress", ()=> {
    socket.emit('typing',socket.id);
});


// ----------- ON


// switch room 
/*
socket.on('switch', (room,users,user,id)=>{
    outputRoomName(room);
    outputUserList(users);
    con(room,user,id)
});
*/

// update room data

socket.on('updateRoom', (room,users,user)=>{
    outputRoomName(room);
    outputUserList(users);
    con(room,user);
});


socket.on('updateRoom2', (room,users)=>{
    outputRoomName(room);
    outputUserList(users);
});


//receive a message
socket.on('message', (msg)=>{
    outputMessage(msg);
})


socket.on('history', (data)=>{
    
    const div = document.createElement('div');
    div.classList.add('history');
    for (var i = 0; i < data.length; i++){
        console.log(data[i].text)
        const p = document.createElement('p');
        p.classList.add('uname');
        p.innerText = data[i].username;
        p.innerHTML += `<span>${data[i].date}</span>`;
        div.appendChild(p);
        const p2 = document.createElement('p');
        p2.innerText = data[i].text;
        div.appendChild(p2);
    }
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight - chatMessages.clientHeight;

})


// listen for typing
socket.on('typing', (msg)=>{
    feedback(msg);
});

// ----------- Functions

// add feedback to DOM
function feedback(msg) {
    feedbackbox.innerHTML = msg;
    setTimeout(clearfeedback, 1500);
}

// clear feedback
function clearfeedback() {
    feedbackbox.innerHTML = '';
}

function sendMessage() {
    let msg = msgTxt.value;
    if (msg != '') {
        socket.emit('message',msg);
        msgTxt.value = '';
        msgTxt.focus();
    }
}

function con(room,user,id) {
    console_label.innerHTML = `./${room}/${user} >`;
}

// Add roomname to DOM
function outputRoomName(room) {
    roomname.innerHTML = room;
}

// Add users to DOM
function outputUserList(users) {
    userslist.innerHTML = '';
     users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = user.name;
        userslist.appendChild(li); 
    });
}

// Add messages to DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    const p = document.createElement('p');
    p.classList.add('uname');
    p.innerText = message.username;
    p.innerHTML += `<span>${message.time}</span>`;
    div.appendChild(p);
    const p2 = document.createElement('p');
    p2.innerText = message.text;
    div.appendChild(p2);
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight - chatMessages.clientHeight;
}
