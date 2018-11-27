import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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

    }
  }
})
