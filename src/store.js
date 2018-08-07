import Vue from 'vue'
import Vuex from 'vuex'
import demoData from './content/demoData'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...demoData
  },
  getters: {
    codices: state => state.codices.map(codex => {
      return {
        ...codex,
        notes: codex.notes
          .map(noteId => {
            return state.notes.find(note => note.id === noteId)
          })
          .filter(note => note !== undefined)
      }
    }),
    notes: state => state.notes
  }
})

export default store
