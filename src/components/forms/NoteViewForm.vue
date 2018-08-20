<template>
    <div class="note-container">
      <div class="note">
        <h3
          data-input-name="title"
          contenteditable="true"
          @input="updateNote"
        >
          {{ title }}
        </h3>

        <p
          data-input-name="content"
          contenteditable="true"
          @input="updateNote"
        >
          {{ content }}
        </p>
      </div>
    </div>
</template>

<script>
import {
  EDIT_NOTE
} from '../../store'

export default {
  name: 'NoteViewForm',
  methods: {
    updateNote (e) {
      const { textContent, dataset: { inputName } } = e.target
      console.log(textContent, inputName)

      const note = {
        id: this.id,
        [inputName]: textContent
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
