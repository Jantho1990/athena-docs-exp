export default {
  all: state => {
    return { ...state }
  },
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
}
