var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const cors = require('cors')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const addUserRoutes = require('./routes/user-route')

app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true // enable set cookie
}));  
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'puki muki',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

addUserRoutes(app)

// app.get('/',function(res,req){
//     res.sendFile(__dirname+'index.html')
// })


const roomService = require('./services/room.service')

io.on('connection', function (socket) {
    console.log('user connected')

    socket.on('getRoomList', function () {
        return roomService.query()
            .then(rooms => {
                socket.emit('setRoomList', rooms)
            })
    })
    
    socket.on('getRoomById', function(roomId){
      
        return roomService.getById(roomId)
            .then(room => {
                socket.emit('setRoom', room)
            })
    })

    socket.on('getTime', function () {
        socket.broadcast.emit('getStatusTime')
    })

    socket.on('setStatusTime', function (time) {
        io.emit('setCurrTime', time)
    })

    socket.on('sendMsg', (newMsg) => {
        io.emit('setNewMsg', newMsg)
    })

    socket.on('disconnect', function () {
        console.log('user disconnected')
    })

    socket.on('updatePlaylist', (roomId, updatedPlaylist) => {
        roomService.updatePlaylist(roomId, updatedPlaylist)
        .then(() => {
            console.log('PLAYLIST',updatedPlaylist)
            // io.emit('loadPlaylist', updatedPlaylist)
            })
    })
})

const port = process.env.PORT || 3000

http.listen(port, function () {
    console.log(`connected in port ${port}`);
})