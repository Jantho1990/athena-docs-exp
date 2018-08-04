<template>
  <aside class="notes-container">
    <ul>
      <li
        class="note-container"
        v-for="note in notes"
        :key="note.id"
      >
        <NotePage v-bind="note"/>
      </li>
    </ul>
  </aside>
</template>

<script>
import NotePage from './NotePage'

export default {
  name: 'CodexNotes',
  components: {
    NotePage
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
