<template>
  <div class="codex-page">
    <NoteView v-bind="note"/>
  </div>
</template>

<script>
import content from '../../content/demoData.json'
import NoteView from '../NoteView'

export default {
  components: {
    NoteView
  },
  computed: {
    note () {
      // TODO: Figure out why this needs to be a computed
      return content.notes.filter(note => note.id === this.id)
    }
  },
  data () {
    return {
      id: Number(this.$route.params.id)
    }
  },
  methods: {
    assignNotes () {}
  }
}
</script>

<style>

</style>
