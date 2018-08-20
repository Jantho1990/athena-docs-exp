<template>
  <div class="codex-page">
    <NoteView v-if="!editModeOn" v-bind="note"/>
    <NoteViewForm v-if="editModeOn" v-bind="note"/>
  </div>
</template>

<script>
import NoteView from '../NoteView'
import NoteViewForm from '../forms/NoteViewForm'

export default {
  components: {
    NoteView,
    NoteViewForm
  },
  computed: {
    note () {
      return this.$store.getters.note(this.id)
    }
  },
  data () {
    return {
      editModeOn: true,
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
