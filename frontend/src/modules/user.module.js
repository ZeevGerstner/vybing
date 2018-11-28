import userService from '../services/user.service.js'

export default {
    state: {
        
    },
    getters: {

    },
    mutations: {
        setCurrUser(){

        }
    },
    actions: {
        login({commit}, { user }){
            console.log(user)
            userService
            // commit({type: setCurrUser, user})
        }
    }
}
