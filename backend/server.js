var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

// app.get('/',function(res,req){
//     res.sendFile(__dirname+'index.html')
// })


io.on('connection', function (socket) {
    console.log('user connected')

    socket.on('getTime', function(){
        socket.broadcast.emit('getStatusTime')
    })
    
    socket.on('setStatusTime', function (time) {
        io.emit('setCurrTime', time)
    })

    socket.on('sendMsg', (newMsg) =>{
        io.emit('setNewMsg', newMsg)
    })

    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

http.listen(3000, function () {
    console.log('connected in port 3000');
})