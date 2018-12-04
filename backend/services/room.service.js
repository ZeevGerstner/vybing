const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    updatePlaylist,
    addRoom,
    getUserRooms,
    updateRoomLikes
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

function updateRoomLikes (room, user) {
    if (!room.userLikedIds) room.userLikedIds = []
    var idx = room.userLikedIds.findIndex(currUserId => {
        return currUserId === user._id
    })
    if (idx === -1) room.userLikedIds.push(user._id)
    else room.userLikedIds.splice(idx, 1)
    room._id = new ObjectId(room._id)
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.updateOne(
                { _id: room._id },
                { $set: room }
            )
                .then(res => {
                    return room
                })
        })
}

function addRoom (newRoom) {
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.insertOne(newRoom)
        })
}

// getUserRooms("5bffb9c16e5a7a17bfe08f55")
function getUserRooms (roomId) {
    const _id = new ObjectId(roomId)
    return mongoService.connectToDb()
        .then(db =>
            db.collection('user').aggregate([
                {
                    $match: { _id }
                },
                {
                    $lookup:
                    {
                        from: 'room',
                        localField: 'roomsCreatedIds',
                        foreignField: '_id',
                        as: 'roomsCreated'
                    }
                },
                {
                    $lookup: {
                        from: 'room',
                        localField: 'roomsLikedIds',
                        foreignField: '_id',
                        as: 'roomsLiked'
                    }
                }
            ]).toArray()
        )
}
