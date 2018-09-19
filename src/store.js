import Vue from 'vue'
import Vuex from 'vuex'
import demoData from './content/demoData'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...demoData,
    codexId: demoData.codices.length || 0,
    noteId: demoData.notes.length || 0
  },
  getters,
  mutations,
  actions
})

export default store
