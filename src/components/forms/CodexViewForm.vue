<template>
    <div class="codex-container">
      <div class="codex">
        <delete-button
          class="codex-delete"
          :action="action"
          :id="id"
          :redirect="'/codices'"
        >
          Delete
        </delete-button>
        <h2
          data-input-name="title"
          contenteditable="true"
          @blur="updateCodex"
        >
          {{ title }}
        </h2>

        <p
          data-input-name="content"
          contenteditable="true"
          @blur="updateCodex"
        >
          {{ content }}
        </p>
      </div>
      <div class="codex-notes">
        <NotesContainer
          :codexId="id"
          :notes="notes"
        />
        <attach-note-form
          :attachedNotes="attachedNotes"
          :codexId="id"
          :notes="allNotes"
        />
      </div>
    </div>
</template>

<script>
import {
  DELETE_CODEX,
  EDIT_CODEX
} from '../../store/actions'
import AttachNoteForm from '../forms/AttachNoteForm'
import DeleteButton from '../DeleteButtonVuex'
import NotesContainer from '../NotesContainer'

export default {
  name: 'CodexViewForm',
  components: {
    AttachNoteForm,
    DeleteButton,
    NotesContainer
  },
  computed: {
    allNotes () {
      return this.$store.getters.notes
    },
    attachedNotes () {
      return this.notes.map(note => note.id)
    }
  },
  data () {
    return {
      action: DELETE_CODEX
    }
  },
  methods: {
    redirectFromPage () {
      this.$router.push('/codices')
    },
    updateCodex (e) {
      const { textContent, dataset: { inputName } } = e.target
      console.log(textContent, inputName)

      const codex = {
        id: this.id,
        [inputName]: textContent.trim()
      }

      const { dispatch } = this.$store
      dispatch(EDIT_CODEX, {
        codex
      })
    }
  },
  props: {
    content: {
      type: String,
      default: 'Filler codex content'
    },
    id: {
      type: Number
    },
    notes: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: 'Codex Page'
    }
  }
}
</script>

<style lang="scss" scoped>
.codex-container {
  border: 1px solid hsl(0, 50%, 50%);
  background: hsl(0, 0%, 90%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "codex-left codex-right";
  .codex {
    grid-area: codex-left;
  }
  .codex-notes {
    grid-area: codex-right;
  }
}
</style>
