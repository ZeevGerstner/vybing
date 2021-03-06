const userService = require('../services/user.service')

function addRoutes (app) {
    app.post('/signup', (req, res) => {
        const newUser = req.body.newUser
        userService.addUser({ newUser })
            .then(user => res.json(user))
    })

    app.put('/login', (req, res) => {
        const user = req.body.user
        userService.checkLogin({ user })
            .then(currUser => {
                currUser.password = null;
                req.session.user = currUser
                res.json(currUser)
            })
    })
}



module.exports = addRoutes;


