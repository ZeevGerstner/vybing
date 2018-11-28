
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://zeevgg:vybing1@ds119304.mlab.com:19304/vybing_db';
const dbName = 'vybing_db';

var dbConnection = null
function connectToDb() {
    if (dbConnection) return Promise.resolve(dbConnection);
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            if (err) return reject('cannot connect to database')

            dbConnection = client.db(dbName);
            resolve(dbConnection)
        });
    })
}

module.exports = {
    connectToDb
}