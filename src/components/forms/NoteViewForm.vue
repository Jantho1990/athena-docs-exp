<template>
    <div class="note-container">
      <delete-button
        :action="action"
        :id="id"
        :redirect="'/notes'"
      >
        Delete Note
      </delete-button>
      <div class="note">
        <h3
          data-input-name="title"
          contenteditable="true"
          @blur="updateNote"
        >
          {{ title }}
        </h3>

        <p
          data-input-name="content"
          contenteditable="true"
          @blur="updateNote"
        >
          {{ content }}
        </p>
      </div>
    </div>
</template>

<script>
import {
  DELETE_NOTE,
  EDIT_NOTE
} from '../../store/actions'
import DeleteButton from '../DeleteButtonVuex'

export default {
  name: 'NoteViewForm',
  components: {
    DeleteButton
  },
  data () {
    return {
      action: DELETE_NOTE
    }
  },
  methods: {
    updateNote (e) {
      const { textContent, dataset: { inputName } } = e.target

      const note = {
        id: this.id,
        [inputName]: textContent.trim()
      }

      const { dispatch } = this.$store
      dispatch(EDIT_NOTE, {
        note
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
    "note-left note-right";
  .note {
    grid-area: note-left;
  }
  .note-notes {
    grid-area: note-right;
  }
}
</style>
