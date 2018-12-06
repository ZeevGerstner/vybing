const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const cors = require('cors')
const history = require('connect-history-api-fallback');

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const addUserRoutes = require('./routes/user-route')
const connectSocket = require('./services/socket.service')


app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true 
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
connectSocket(io)

app.use(history())
app.use(express.static('public'));

const port = process.env.PORT || 3000

http.listen(port, function () {
    console.log(`connected in port ${port}`);
})