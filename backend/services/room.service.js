const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    updatePlaylist
    // remove,
    // update,
    // add,
    // typesQuery
}

function query() {
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.find({}).toArray()
        })
}

function getById(roomId) {
    roomId = new ObjectId(roomId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.findOne({ _id: roomId })
        })
}

function updatePlaylist(roomId, playlist) {
    roomId = new ObjectId(roomId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('room');
            return roomCollection.update(
                { _id: roomId },
                { $set: { "playlist": playlist }}
            )
        })
}

// function typesQuery() {
//     return mongoService.connectToDB()
//         .then(dbConn => {
//             const toyCollection = dbConn.collection('toy');
//             return toyCollection.aggregate([
//                 {"$group" : {_id:"$type", count:{$sum:1}}}
//             ]).toArray()
//         //     return toyCollection.find({}, {
//         //         projection: { _id: 0, type: 1 }
//         //     }).toArray()
//         //         .then(types => {
//         //             const arrTypes = types.map(type => type.type)

//         //             return arrTypes;
//         //         })
//         // })
//     })
// }



// function remove(toyId) {
//     toyId = new ObjectId(toyId)
//     return mongoService.connectToDB()
//         .then(dbConn => {
//             const toyCollection = dbConn.collection('toy');
//             return toyCollection.remove({ _id: toyId })
//         })
// }

// function update(toy) {
//     const toyId = new ObjectId(toy._id)
//     return mongoService.connectToDB()
//         .then(dbConn => {
//             const toyCollection = dbConn.collection('toy');
//             return toyCollection.updateOne({ _id: toyId },
//                 { $set: { name: toy.name, price: toy.price, type: toy.type, inStock: toy.inStock } })
//         })
// }

// function add(toy) {
//     return mongoService.connectToDB()
//         .then(dbConn => {
//             const toyCollection = dbConn.collection('toy');
//             return toyCollection.insertOne(toy)
//         })
//     }