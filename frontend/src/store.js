import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import searchMoudle from './modules/search.module.js'

export default new Vuex.Store({
  modules: {
    searchMoudle
  },
  actions: {
    "<ACTION_PREFIX><EVENT_NAME>"() {
      // do something
      console.log('act');

    },
  },
})
