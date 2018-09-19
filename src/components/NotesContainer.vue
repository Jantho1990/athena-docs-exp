<template>
  <aside class="notes-container">
    <ul>
      <li
        class="note-container"
        v-for="note in notes"
        :key="note.id"
      >
        <NotePreview v-bind="note">
          <template slot="action-buttons">
            <dissociate-button
              :action="action"
              :codexId="codexId"
              :id="note.id"
            >
              Remove Note From Codex
            </dissociate-button>
          </template>
        </NotePreview>
      </li>
    </ul>
  </aside>
</template>

<script>
import { DISSOCIATE_NOTE } from '../store/actions'
import DissociateButton from './DissociateButtonVuex'
import NotePreview from './NotePreview'

export default {
  name: 'NotesContainer',
  components: {
    DissociateButton,
    NotePreview
  },
  data () {
    return {
      action: DISSOCIATE_NOTE
    }
  },
  props: {
    codexId: {
      type: Number
    },
    notes: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>

</style>
