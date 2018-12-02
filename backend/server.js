const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const cors = require('cors')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const addUserRoutes = require('./routes/user-route')

app.use(express.static('public'));

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

io.on('connection', (socket) => {
    console.log('user connected')

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

    socket.on('sendMsg', (newMsg) => {
        io.emit('setNewMsg', newMsg)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })

    socket.on('searchRoom', (filter) => {
        
        roomService.query(filter)
            .then(filteredRooms => {
                console.log('filter:', filteredRooms)
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
                console.log('filter:', filteredRooms)
                socket.emit('setRoomsFilter', filteredRooms)
            })
    })

    socket.on('updatePlaylist', (roomId, updatedPlaylist) => {
        roomService.updatePlaylist(roomId, updatedPlaylist)
            .then(() => {
                // console.log('PLAYLIST', updatedPlaylist)
                return roomService.query()
                    .then(rooms => {
                        io.emit('setRoomList', rooms)
                    })
                // io.emit('loadPlaylist', updatedPlaylist)
            })
    })
    socket.on('modifyPlaylist', (roomId, updatedPlaylist) => {
        roomService.updatePlaylist(roomId, updatedPlaylist)
            .then(() => {
                io.emit('loadPlaylist', updatedPlaylist)
            })
        })
    })

    const port = process.env.PORT || 3000

    http.listen(port, function () {
        console.log(`connected in port ${port}`);
    })