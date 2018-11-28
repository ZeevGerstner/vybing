var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)



// app.get('/',function(res,req){
//     res.sendFile(__dirname+'index.html')
// })


var playlist = [
    {
        title: 'sasa re sasa',
        id: '3SGOVOEgjto',
        img: 'https://i.ytimg.com/vi/3SGOVOEgjto/hqdefault.jpg'
    },
    {
        title: 'sasa to sasa',
        id: 'iJQR3s2Py6U',
        img: 'https://i.ytimg.com/vi/iJQR3s2Py6U/hqdefault.jpg'
    },
    {
        title: 'Sasa Matic - Rastanak - (Offical video 2018)',
        id: 'cOV-8-c15W0',
        img: 'https://i.ytimg.com/vi/cOV-8-c15W0/hqdefault.jpg'
    },
]


io.on('connection', function (socket) {
    console.log('user connected')

    socket.on('getTime', function () {
        socket.broadcast.emit('getStatusTime')
    })

    socket.on('setStatusTime', function (time) {
        io.emit('setCurrTime', time)
    })

    socket.on('getPlaylist', function () {
        io.emit('LOAD_PLAYLIST',playlist)
    })
    socket.on('sendMsg', (newMsg) => {
        io.emit('setNewMsg', newMsg)
    })

    socket.on('disconnect', function () {
        console.log('user disconnected')
    })

    socket.on('updatePlaylist', (updatedPlaylist) => {
        io.emit('LOAD_PLAYLIST', updatedPlaylist)
    })
})

http.listen(3000, function () {
    console.log('connected in port 3000');
})