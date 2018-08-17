<template>
    <div class="codex-container">
      <div class="codex">
        <h2
          data-input-name="title"
          contenteditable="true"
          @input="updateCodex"
        >
          {{ title }}
        </h2>

        <p>{{ content }}</p>
      </div>
      <NotesContainer
        class="codex-notes"
        :notes="notes"
      />
    </div>
</template>

<script>
import {
  ADD_CODEX,
  EDIT_CODEX
} from '../../store'
import NotesContainer from '../NotesContainer'

export default {
  name: 'CodexViewForm',
  components: {
    NotesContainer
  },
  methods: {
    updateCodex (e) {
      const { textContent, dataset: { inputName } } = e.target
      console.log(textContent, inputName)

      const codex = {
        id: this.id,
        [inputName]: textContent
      }

      const { dispatch } = this.$store
      dispatch(EDIT_CODEX, {
        codex
      })
    },
    submitCodex () {
      let { title_: title, content_: content, selectedNotes: notes } = this
      const codex = {
        title,
        content,
        notes
      }
      const { dispatch } = this.$store
      dispatch(ADD_CODEX, {
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
