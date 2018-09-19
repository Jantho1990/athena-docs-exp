<template>
    <div class="attach-note">
      <div class="no-notes" v-if="availableNotes.length === 0">
        No available notes
      </div>
      <div class="notes-found" v-else>
        <h4>Attach New Notes</h4>
        <select name="notes" v-model="selectedNote" @change="attachNote">
          <option :value="note.id" v-for="note in availableNotes" :key="`attachnoteform-${note.id}`">
              {{ note.title }}
          </option>
        </select>
      </div>
    </div>
</template>

<script>
import { ASSOCIATE_NOTE } from '../../store/actions'

export default {
  name: 'AttachNoteForm',
  computed: {
    availableNotes () {
      const { notes, attachedNotes } = this
      return notes.filter(note => !attachedNotes.includes(note.id))
    }
  },
  data () {
    return {
      selectedNote: null
    }
  },
  methods: {
    attachNote () {
      const { codexId, selectedNote: id, $store: { dispatch } } = this

      dispatch(ASSOCIATE_NOTE, { id, codexId })

      this.selectedNote = null
    }
  },
  props: {
    attachedNotes: {
      type: Array,
      default () {
        return []
      }
    },
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
