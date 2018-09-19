import Vue from 'vue'

export const INCREMENT_ID = 'INCREMENT_ID'
export const STORE_CODEX = 'STORE_CODEX'
export const UPDATE_CODEX = 'UPDATE_CODEX'
export const DESTROY_CODEX = 'DESTROY_CODEX'
export const ATTACH_CODEX = 'ATTACH_CODEX'
export const DETACH_CODEX = 'DETACH_CODEX'
export const STORE_NOTE = 'STORE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DESTROY_NOTE = 'DESTROY_NOTE'
export const ATTACH_NOTE = 'ATTACH_NOTE'
export const DETACH_NOTE = 'DETACH_NOTE'

export default {
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
        codices: note.codices
          ? note.codices.filter(c => c !== id)
          : []
      }
    })
  },
  [ATTACH_CODEX] (state, payload) {
    const { codex } = payload
    const {
      notes,
      codexId: id
    } = state

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
    const {
      codices,
      noteId
    } = state
    const {
      note,
      note: {
        id = noteId
      },
      codexId = null
    } = payload

    const modifyCodex = c => {
      if (codices[c].notes.findIndex(noteId => noteId === id) === -1) {
        return {
          ...codices[c],
          notes: [...codices[c].notes, id]
        }
      } else {
        return codices[c]
      }
    }

    if (codexId !== null) {
      const c = codices.findIndex(ct => ct.id === codexId)
      codices[c] = { ...modifyCodex(c)
      }
    } else {
      note.codices.forEach(cId => {
        const c = codices.findIndex(ct => ct.id === cId)
        codices[c] = modifyCodex(c)
      })
    }

    state.codices = [...codices]
  },
  [DETACH_NOTE] (state, payload) {
    const {
      id,
      codexId = null
    } = payload

    const codices = state.codices.map(codex => {
      if (codexId === null || codex.id === codexId) {
        return {
          ...codex,
          notes: codex.notes ? codex.notes.filter(c => c !== id) : []
        }
      }

      return codex
    })

    state.codices = [...codices]
  }
}
