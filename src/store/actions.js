import {
  STORE_CODEX,
  UPDATE_CODEX,
  DESTROY_CODEX,
  ATTACH_CODEX,
  DETACH_CODEX,
  STORE_NOTE,
  UPDATE_NOTE,
  DESTROY_NOTE,
  ATTACH_NOTE,
  DETACH_NOTE,
  INCREMENT_ID
} from './mutations'

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

export default {
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
