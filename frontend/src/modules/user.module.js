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
            console.log('setcurruser',currUser)
            state.currUser = currUser
        },
        logoutUser(state){
            localStorage.removeItem('currUser');
            state.currUser = null
        }
    },
    actions: {
        login({commit}, { user }){
            return userService.login(user)
            .then(currUser => {
                if(currUser){
                    console.log(currUser)
                    commit({type: 'setCurrUser', currUser})
                    localStorage.setItem('currUser', JSON.stringify(currUser));

                }
                return currUser
            })
        },
        signup({commit}, { newUser }){
            return userService.signup(newUser)
        }
    }
}
