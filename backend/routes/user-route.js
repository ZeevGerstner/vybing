const userService = require('../services/user.service')

function addRoutes(app) {
    app.post('/singup', (req, res) => {
        const userName = req.body.userName

        // userService.addUser({ nickname })
        //     .then(user => res.json(user))
    })

    app.put('/login', (req, res) => {
        const user = req.body.user
        userService.checkLogin({ user })
            .then(currUser => {
                req.session.user = currUser
                console.log('curruser:', currUser)
                res.json(currUser)
            })
    })
}

  

module.exports = addRoutes;


