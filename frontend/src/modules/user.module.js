import userService from '../services/user.service.js'

export default {
    state: {
        currUser: {}
    },
    getters: {
        getCurrUser: (state) => state.currUser,
    },
    mutations: {
        setCurrUser(state,{currUSer}){
            state.currUser = currUSer
        }
    },
    actions: {
        login({commit}, { user }){
            return userService.login(user)
            .then(currUSer => {
                commit({type: 'setCurrUser', currUSer})
            })
        }
    }
}
