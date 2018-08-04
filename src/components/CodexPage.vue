<template>
    <div class="codex-container">
      <div class="codex">
        <h2>This is a codex page</h2>
        <p>{{ content }}</p>
      </div>
      <CodexNotes
        class="codex-notes"
        :notes="notes"
      />
    </div>
</template>

<script>
import CodexNotes from './CodexNotes'

export default {
  name: 'CodexPage',
  components: {
    CodexNotes
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
    }
  }
}
</script>

<style lang="scss" scoped>
.codex-container {
  border: 1px solid hsl(0, 50%, 50%);
  background: hsl(0, 0%, 90%);
  display: grid;
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
