import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user.module.js'
import searchMoudle from './modules/search.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    searchMoudle,
    userModule,
  },
  actions: {
    
  },

})
