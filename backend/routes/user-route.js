const userService = require('../services/user.service')


function addRoutes(app) {
    app.post('/singup', (req, res) => {
        const userName = req.body.userName

        // userService.addUser({ nickname })
        //     .then(user => res.json(user))
    })

    app.put('/login', (req, res) => {
        const userName = req.body.userName
        userService.checkLogin({ userName })
            .then(user => {
                req.session.user = user
                res.json(user)
            })
    })
}


module.exports = addRoutes;


