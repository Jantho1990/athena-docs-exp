<template>
  <div>
    <h2>Notes Page</h2>
    <div class="notes">
      <NotePreview v-for="note in notes" v-bind="note" :key="note.id"/>
    </div>
  </div>
</template>

<script>
import content from '../../content/demoData.json'
import NotePreview from '../NotePreview'

export default {
  components: {
    NotePreview
  },
  data () {
    return {
      codices: content.codices.map(codex => {
        let { id, title } = codex
        return {
          id,
          title
        }
      }),
      notes: content.notes
    }
  },
  methods: {
    assignNotes () {}
  }
}
</script>

<style>

</style>
