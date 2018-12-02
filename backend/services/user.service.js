'use strict'

const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;


function checkLogin({ user }) {
    return mongoService.connectToDb()
        .then(dbConn => {
            const userCollection = dbConn.collection('user');
            return userCollection.findOne({ $and: [{ "name": user.name }, {"password": user.password}] })
        })
}


function addUser({ userName }) {
    var user = { userName }
    return mongoService.connectToDb()
        .then(db => db.collection('user').insertOne(user))
        .then(res => {
            user._id = res.insertedId
            return user
        })
}


function getById(userId){
    userId = new ObjectId(userId)
    return mongoService.connectToDb()
    .then(dbConn => {
        const userCollection = dbConn.collection('user');
        return userCollection.findOne({_id: userId})
    })
}


function getUserRooms (userId) {
    const _id = new ObjectId(userId)
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


module.exports = {
    addUser,
    checkLogin,
    getById,
    getUserRooms
}