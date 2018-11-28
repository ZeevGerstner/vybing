import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
  },
  state: {

  },
  mutations: {
    "<MUTATION_PREFIX><EVENT_NAME>"() {
      console.log('mut');
      
      // do something
    }
  },
  actions: {
    "<ACTION_PREFIX><EVENT_NAME>"() {
      // do something
      console.log('act');
    },

  }
})
