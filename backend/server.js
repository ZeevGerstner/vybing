var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

// app.get('/',function(res,req){
//     res.sendFile(__dirname+'index.html')
// })
var userCounter = 0;
var initUser = false;

io.on('connection', function (socket) {
    console.log('user connected')
    if (initUser) {
        socket.broadcast.emit('getStatusTime')
    } else {
        socket.emit('setCurrTime', 0)
        initUser = true;
    }

    socket.on('get-time', function () {
        // console.log('custom emit')
    })

    socket.on('set-users', function () {
        // console.log('custom emit')
        ++userCounter
        console.log(userCounter);
        
    socket.broadcast.emit('getUsers',userCounter)

    })

    socket.on('setStatusTime', function (time) {
        // console.log('time', time)
        io.emit('setCurrTime', time)
    })

    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

http.listen(3000, function () {
    console.log('connected in port 3000');
})