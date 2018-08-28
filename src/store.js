import Vue from 'vue'
import Vuex from 'vuex'
import demoData from './content/demoData'

Vue.use(Vuex)

// Mutations
const INCREMENT_ID = 'INCREMENT_ID'
const STORE_CODEX = 'STORE_CODEX'
const UPDATE_CODEX = 'UPDATE_CODEX'
const DESTROY_CODEX = 'DESTROY_CODEX'
const ATTACH_CODEX = 'ATTACH_CODEX'
const DETACH_CODEX = 'DETACH_CODEX'
const STORE_NOTE = 'STORE_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'
const DESTROY_NOTE = 'DESTROY_NOTE'
const ATTACH_NOTE = 'ATTACH_NOTE'
const DETACH_NOTE = 'DETACH_NOTE'

// Actions
export const ADD_CODEX = 'ADD_CODEX'
export const EDIT_CODEX = 'EDIT_CODEX'
export const DELETE_CODEX = 'DELETE_CODEX'
export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

const store = new Vuex.Store({
  state: {
    ...demoData,
    codexId: demoData.codices.length || 0,
    noteId: demoData.notes.length || 0
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
    codex: state => id => state.codices.filter(codex => codex.id === id)
      .map(codex => {
        return {
          ...codex,
          notes: codex.notes.map(noteId => {
            return state.notes.find(note => note.id === noteId)
          })
        }
      }),
    notes: state => state.notes,
    note: state => id => state.notes.filter(note => note.id === id)
  },
  mutations: {
    [INCREMENT_ID] (state, increment) {
      state[`${increment}Id`]++
    },
    [STORE_CODEX] (state, payload) {
      const { codex } = payload
      // this.commit(INCREMENT_ID, 'codex')
      const codexEntry = {
        ...codex,
        id: ++state.codexId
      }
      const codices = [
        ...state.codices,
        codexEntry
      ]

      state.codices = codices

      /* codex.notes.forEach(noteId => {
        const n = state.notes.findIndex(nt => nt.id === noteId)
        state.notes[n] = {
          ...state.notes[n],
          codices: [
            ...state.notes[n].codices,
            codexEntry.id
          ]
        }
      }) */
    },
    [UPDATE_CODEX] (state, payload) {
      const { codex } = payload

      const c = state.codices.findIndex(c => c.id === codex.id)

      Vue.set(state.codices, c, {
        ...state.codices[c],
        ...codex
      })

      /* if (codex.notes) {
        codex.notes.forEach(noteId => {
          const n = state.notes.findIndex(nt => nt.id === noteId)
          state.notes[n] = {
            ...state.notes[n],
            codices: [
              ...state.notes[n].codices,
              codex.id
            ]
          }
        })
      } */
    },
    [DESTROY_CODEX] (state, payload) {
      const { id } = payload

      state.codices = state.codices.filter(codex => codex.id !== id)

      state.notes = state.notes.map(note => {
        return {
          ...note,
          codices: note.codices ? note.codices.filter(c => c !== id) : []
        }
      })
    },
    [ATTACH_CODEX] (state, payload) {
      const { codex, codex: { id } } = payload

      codex.notes.forEach(noteId => {
        const n = state.notes.findIndex(nt => nt.id === noteId)
        if (state.notes[n].codices.findIndex(codexId => codexId === id) !== -1) {
          state.notes[n] = {
            ...state.notes[n],
            codices: [
              ...state.notes[n].codices,
              id
            ]
          }
        }
      })
    },
    [DETACH_CODEX] (state, payload) {
      const { id } = payload

      state.notes = state.notes.map(note => {
        return {
          ...note,
          codices: note.codices ? note.codices.filter(c => c !== id) : []
        }
      })
    },
    [STORE_NOTE] (state, payload) {
      const { note } = payload

      const noteEntry = {
        ...note,
        id: ++state.noteId
      }

      const notes = [
        ...state.notes,
        noteEntry
      ]

      state.notes = notes

      /* note.codices.forEach(codexId => {
        const c = state.codices.findIndex(cdx => cdx.id === codexId)
        state.codices[c] = {
          ...state.codices[c],
          notes: [
            ...state.codices[c].notes,
            noteEntry.id
          ]
        }
      }) */
    },
    [UPDATE_NOTE] (state, payload) {
      const { note } = payload

      const n = state.notes.findIndex(n => n.id === note.id)

      Vue.set(state.notes, n, {
        ...state.notes[n],
        ...note
      })

      /* if (note.codices) {
        note.codicies.forEach(codexId => {
          const c = state.codices.findIndex(ct => ct.id === codexId)
          state.codices[c] = {
            ...state.codices[c],
            codices: [
              ...state.codices[c].codices,
              note.id
            ]
          }
        })
      } */
    },
    [DESTROY_NOTE] (state, payload) {
      const { id } = payload

      state.notes = state.notes.filter(note => note.id !== id)

      /* state.codices = state.codices.map(codex => {
        return {
          ...codex,
          notes: codex.notes ? codex.notes.filter(n => n !== id) : []
        }
      }) */
    },
    [ATTACH_NOTE](state, payload) {
      const { note, note: { id } } = payload

      note.codices.forEach(codexId => {
        const c = state.codices.findIndex(ct => ct.id === codexId)
        if (state.codices[c].notes.findIndex(noteId => noteId === id) !== -1) {
          state.codices[c] = {
            ...state.codices[c],
            notes: [
              ...state.codices[c].notes,
              id
            ]
          }
        }
      })
    },
    [DETACH_NOTE](state, payload) {
      const { id } = payload

      state.codices = state.codices.map(codex => {
        return {
          ...codex,
          notes: codex.notes ? codex.notes.filter(c => c !== id) : []
        }
      })
    }
  },
  actions: {
    [ADD_CODEX] ({ commit }, payload) {
      const { codex } = payload
      if (codex) {
        commit(STORE_CODEX, { codex: { ...codex } })
        commit(ATTACH_CODEX, { codex: { ...codex } })
      }
    },
    [ADD_NOTE] ({ commit }, payload) {
      const { note } = payload
      if (note) {
        commit(STORE_NOTE, { note: { ...note } })
        commit(ATTACH_NOTE, { note: { ...note } })
      }
    },
    [EDIT_CODEX] ({ commit }, payload) {
      const { codex } = payload
      if (codex) {
        commit(UPDATE_CODEX, { codex: { ...codex } })
        commit(ATTACH_CODEX, { codex: { ...codex } })
      }
    },
    [EDIT_NOTE] ({ commit }, payload) {
      const { note } = payload
      if (note) {
        commit(UPDATE_NOTE, { note: { ...note } })
        commit(ATTACH_NOTE, { note: { ...note } })
      }
    },
    [DELETE_CODEX] ({ commit }, payload) {
      const { id } = payload
      if (id) {
        commit(DESTROY_CODEX, { id })
        commit(DETACH_CODEX, { id })
      }
    },
    [DELETE_NOTE] ({ commit }, payload) {
      const { id } = payload
      if (id) {
        commit(DESTROY_NOTE, { id })
        commit(DETACH_NOTE, { id })
      }
    }
  }
})

export default store
