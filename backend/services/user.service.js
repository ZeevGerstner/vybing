'use strict'

const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;


function checkLogin({ user }) {
    return mongoService.connectToDb()
        .then(dbConn => {
            const roomCollection = dbConn.collection('user');
            return roomCollection.findOne({ $and: [{ "name": user.name }, {"password": user.password}] })
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




module.exports = {
    addUser,
    checkLogin
}