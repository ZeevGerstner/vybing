



function checkLogin({ userName }) {
    // console.log(userName)
    // return mongoService.connect()
    //     .then(db => db.collection('user').findOne({ userName }))
}


function addUser({ userName }) {
    var user = { userName }
    return mongoService.connect()
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