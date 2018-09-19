<template>
  <div>
    <h2>Notes Page</h2>
    <div class="notes">
      <div class="note-form-container">
        <NoteForm :codices="codices"/>
      </div>
      <NotePreview v-for="note in notes" v-bind="note" :key="note.id">
        <template slot="action-buttons">
          <delete-button
            :action="deleteAction"
            :id="note.id"
          >
            Delete Note
          </delete-button>
        </template>
      </NotePreview>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { DELETE_NOTE } from '../../store/actions'
import DeleteButton from '../DeleteButtonVuex'
import NoteForm from '../forms/NoteForm'
import NotePreview from '../NotePreview'

export default {
  components: {
    DeleteButton,
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
    return {
      deleteAction: DELETE_NOTE
    }
  },
  methods: {
    assignNotes () {}
  }
}
</script>

<style>

</style>
