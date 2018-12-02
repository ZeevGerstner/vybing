const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    updatePlaylist,
    addRoom,
}



function query (filter = { byName: '', byType: '' }) {
    const queryObj = {
        $and: [
            { name: { $regex: `.*${filter.byName}.*` } },
            { type: { $regex: `.*${filter.byType}.*` } },
        ]
    }
    // const currSort = { [filter.bySort]: +filter.upDown } // .sort(currSort)

    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.find(queryObj).toArray()
        })
}

function getById (roomId) {
    console.log({ roomId })
    roomId = new ObjectId(roomId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.findOne({ _id: roomId })
        })
}

function updatePlaylist (roomId, playlist) {
    roomId = new ObjectId(roomId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.update(
                { _id: roomId },
                { $set: { "playlist": playlist } }
            )
        })
}

function addRoom (newRoom) {
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.insertOne(newRoom)
        })
}

