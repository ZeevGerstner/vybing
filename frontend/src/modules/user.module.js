import userService from '../services/user.service.js'

export default {
    state: {
        currUser: null
    },
    getters: {
        getCurrUser: (state) => state.currUser,
        isUserLogin: (state) => !!state.currUser,

    },
    mutations: {
        setCurrUser(state,{currUser}){
            state.currUser = currUser
        }
    },
    actions: {
        login({commit}, { user }){
            return userService.login(user)
            .then(currUser => {
                if(currUser){
                    console.log(currUser)
                    commit({type: 'setCurrUser', currUser})
                }
                return currUser
            })
        },
        signup({commit}, { newUser }){
            return userService.signup(newUser)
        }
    }
}
