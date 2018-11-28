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
        login({commit}, { userName }){
            userService.login(userName)
            // commit({type: setCurrUser, user})
        }
    }
}
