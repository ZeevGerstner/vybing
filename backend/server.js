var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const roomService = require('./services/room.service')

io.on('connection', function (socket) {
    console.log('user connected')

    socket.on('getRoomList', function () {
        return roomService.query()
            .then(rooms => {
                socket.emit('setRoomList', rooms)
            })
    })

    socket.on('getTime', function () {
        socket.broadcast.emit('getStatusTime')
    })

    socket.on('setStatusTime', function (time) {
        io.emit('setCurrTime', time)
    })

    socket.on('getPlaylist', function () {
        io.emit('LOAD_PLAYLIST', playlist)
    })
    socket.on('sendMsg', (newMsg) => {
        io.emit('setNewMsg', newMsg)
    })

    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

const port = process.env.PORT || 3000

http.listen(port, function () {
    console.log(`connected in port ${port}`);
})