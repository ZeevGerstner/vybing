
const roomService = require('./room.service')
const userService = require('./user.service')


function connectSocket(io) {
    io.on('connection', (socket) => {
        var userRoom;
        socket.on('chatRoomJoined', (room) => {
            userRoom = room
            socket.join(userRoom._id)
        })

        socket.on('roomClose',()=>{
            socket.leave(userRoom._id)
        })

        socket.on('sendMsg', (newMsg) => {
            io.to(userRoom._id).emit('setNewMsg', newMsg)
        })

        socket.on('getRoomList', () => {
            return roomService.query()
                .then(rooms => {
                    socket.emit('setRoomList', rooms)
                })
        })
        socket.on('getRoomById', (roomId) => {
            return roomService.getById(roomId)
                .then(room => {
                    socket.emit('setRoom', room)
                })
        })
        socket.on('createRoom', (newRoom) => {
            return roomService.addRoom(newRoom)
                .then(newRoom => {
                    socket.emit('setNewRoom', newRoom.ops[0])
                })
        })

        socket.on('getTime', () => {
            socket.broadcast.emit('getStatusTime')
        })

        socket.on('setStatusTime', (time) => {
            io.emit('setCurrTime', time)
        })


        socket.on('disconnect', () => {
        })

        socket.on('searchRoom', (filter) => {

            roomService.query(filter)
                .then(filteredRooms => {
                    socket.emit('setRoomsFilter', filteredRooms)
                })
        })

        socket.on('getRoomsByGenre', (genre) => {
            var filter = {
                byName: '',
                byType: genre
            }
            roomService.query(filter)
                .then(filteredRooms => {
                    socket.emit('setRoomsFilter', filteredRooms)
                })
        })

        socket.on('updatePlaylist', (roomId, updatedPlaylist) => {
            roomService.updatePlaylist(roomId, updatedPlaylist)
                .then(() => {
                    return roomService.query()
                        .then(rooms => {
                            io.emit('setRoomList', rooms)
                        })
                })
        })
        socket.on('modifyPlaylist', (roomId, updatedPlaylist) => {
            roomService.updatePlaylist(roomId, updatedPlaylist)
                .then(() => {
                    // io.emit('loadPlaylist', updatedPlaylist)
                    io.to(userRoom._id).emit('loadPlaylist', updatedPlaylist)
                })
        })


        socket.on('updateRoomsCreatedUser', (user, roomId) => {
            userService.updateRoomsCreatedUser(user, roomId)
            
        })

        socket.on('updateLiked', (room,user) => {
            roomService.updateRoomLikes(room,user)
            userService.updateRoomLikes(room,user)
            .then(console.log)
        })

        socket.on('getUserById', (userId) => {
            userService.getUserRooms(userId)
                .then(user => {
                    user[0].password = null
                    socket.emit('setUserProfile', user)
                })

        })

    })

}

module.exports = connectSocket