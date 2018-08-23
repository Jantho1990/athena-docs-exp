<template>
    <div class="codex-container">
      <delete-button
        :action="action"
        :id="id"
      >
        Delete
      </delete-button>
      <div class="codex">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </div>
      <NotesContainer
        class="codex-notes"
        :notes="notes"
      />
    </div>
</template>

<script>
import { DELETE_CODEX } from '../store'
import DeleteButton from './DeleteButtonVuex'
import NotesContainer from './NotesContainer'

export default {
  name: 'CodexView',
  components: {
    DeleteButton,
    NotesContainer
  },
  data () {
    return {
      action: DELETE_CODEX
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
