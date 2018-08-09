<template>
  <div>
    <h2>Notes Page</h2>
    <div class="notes">
      <div class="note-form-container">
        <NoteForm/>
      </div>
      <NotePreview v-for="note in notes" v-bind="note" :key="note.id"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NoteForm from '../forms/NoteForm'
import NotePreview from '../NotePreview'

export default {
  components: {
    NoteForm,
    NotePreview
  },
  computed: {
    ...mapGetters([
      'codices',
      'notes'
    ])
  },
  data () {
    return {}
  },
  methods: {
    assignNotes () {}
  }
}
</script>

<style>

</style>
