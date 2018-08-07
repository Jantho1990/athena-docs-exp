import Vue from 'vue'
import Vuex from 'vuex'
import demoData from './content/demoData'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...demoData
  }
})

export default store
