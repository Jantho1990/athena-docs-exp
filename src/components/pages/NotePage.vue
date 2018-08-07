<template>
  <div class="codex-page">
    <NoteView v-bind="note"/>
  </div>
</template>

<script>
import NoteView from '../NoteView'

export default {
  components: {
    NoteView
  },
  computed: {
    note () {
      return this.$store.getters.note(this.id)
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
