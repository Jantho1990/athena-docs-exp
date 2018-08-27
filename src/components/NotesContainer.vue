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
            <button>Placeholder Remove Note</button>
          </template>
        </NotePreview>
      </li>
    </ul>
  </aside>
</template>

<script>
import NotePreview from './NotePreview'

export default {
  name: 'NotesContainer',
  components: {
    NotePreview
  },
  props: {
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
