<template>
  <aside class="notes-container">
    <ul>
      <li
        class="note-container"
        v-for="note in notes"
        :key="note.id"
      >
        <NoteView v-bind="note"/>
      </li>
    </ul>
  </aside>
</template>

<script>
import NoteView from './NoteView'

export default {
  name: 'NotesContainer',
  components: {
    NoteView
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
