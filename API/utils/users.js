const users = [];

// user join to chat
function joinUser(id,name,room) {
    const user = {id,name,room};
    users.push(user);
    return user;
}

// get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id)
}

// get all user from room
function getRoomUsers(room){
    return users.filter(user =>  user.room === room);
}

// users leave the room
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);
    global.loggedUsers = loggedUsers.filter(e => e !== users[index].name);
    if (index !== -1) {
        return users.splice(index, 1)[0];    
    }
}

module.exports = {
    joinUser,
    getRoomUsers,
    userLeave,
    getCurrentUser
}