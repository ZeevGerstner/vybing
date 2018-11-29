const userService = require('../services/user.service')


function addRoutes(app) {
    app.post('/singup', (req, res) => {
        const userName = req.body.userName

        // userService.addUser({ nickname })
        //     .then(user => res.json(user))
    })

    app.put('/login', (req, res) => {
        const user = req.body.user
        console.log(user)
        return userService.checkLogin({ user })
            .then(user => {
                // req.session.user = user
                // console.log(res)
                return res.JSON.string (user)
            })
    })
}


module.exports = addRoutes;


