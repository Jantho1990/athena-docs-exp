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
export const ASSOCIATE_CODEX = 'ASSOCIATE_CODEX'
export const DISSOCIATE_CODEX = 'DISSOCIATE_CODEX'
export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const ASSOCIATE_NOTE = 'ASSOCIATE_NOTE'
export const DISSOCIATE_NOTE = 'DISSOCIATE_NOTE'

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

      const codexEntry = {
        ...codex,
        id: state.codexId
      }
      const codices = [
        ...state.codices,
        codexEntry
      ]

      state.codices = codices
    },
    [UPDATE_CODEX] (state, payload) {
      const { codex } = payload

      const c = state.codices.findIndex(c => c.id === codex.id)

      Vue.set(state.codices, c, {
        ...state.codices[c],
        ...codex
      })
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
      const { codex } = payload
      const { notes, codexId: id } = state

      codex.notes.forEach(noteId => {
        const n = state.notes.findIndex(nt => nt.id === noteId)
        if (notes[n].codices.findIndex(codexId => codexId === id) === -1) {
          notes[n] = {
            ...notes[n],
            codices: [
              ...notes[n].codices,
              id
            ]
          }

          state.notes = notes
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
        id: state.noteId
      }

      const notes = [
        ...state.notes,
        noteEntry
      ]

      state.notes = notes
    },
    [UPDATE_NOTE] (state, payload) {
      const { note } = payload

      const n = state.notes.findIndex(n => n.id === note.id)

      Vue.set(state.notes, n, {
        ...state.notes[n],
        ...note
      })
    },
    [DESTROY_NOTE] (state, payload) {
      const { id } = payload

      state.notes = state.notes.filter(note => note.id !== id)
    },
    [ATTACH_NOTE] (state, payload) {
      const { codices, noteId } = state
      const { note, note: { id = noteId }, codexId = null } = payload

      const modifyCodex = c => {
        return codices[c].notes.findIndex(noteId => noteId === id) === -1
          ? { ...codices[c], notes: [ ...codices[c].notes, id ] }
          : codices[c]
      }

      if (codexId !== null) {
        const c = codexId
        codices[c] = modifyCodex(c)
      } else {
        note.codices.forEach(cId => {
          const c = codices.findIndex(ct => ct.id === cId)
          codices[c] = modifyCodex(c)
        })
      }

      state.codices = [ ...codices ]
    },
    [DETACH_NOTE] (state, payload) {
      const { id, codexId = null } = payload

      state.codices = state.codices.map(codex => {
        if (codexId === null || codex.id === codexId) {
          return {
            ...codex,
            notes: codex.notes ? codex.notes.filter(c => c !== id) : []
          }
        }

        return codex
      })
    }
  },
  actions: {
    [ADD_CODEX] ({ commit }, payload) {
      const { codex } = payload
      if (codex) {
        commit(INCREMENT_ID, 'codex')
        commit(STORE_CODEX, { codex: { ...codex } })
        commit(ATTACH_CODEX, { codex: { ...codex } })
      }
    },
    [ADD_NOTE] ({ commit, state }, payload) {
      const { note } = payload
      if (note) {
        commit(INCREMENT_ID, 'note')
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
    },
    [ASSOCIATE_CODEX] ({ commit }, payload) {
      //
    },
    [ASSOCIATE_NOTE] ({ commit }, payload) {
      const { id, codexId } = payload

      if (id && codexId) {
        commit(ATTACH_NOTE, { note: { id }, codexId })
      }
    },
    [DISSOCIATE_CODEX] ({ commit }, payload) {
      //
    },
    [DISSOCIATE_NOTE] ({ commit }, payload) {
      const { id, codexId } = payload

      if (id && codexId) {
        commit(DETACH_NOTE, { id, codexId })
      }
    }
  }
})

export default store
