<template>
    <div class="codex-container">
      <div class="codex">
        <router-link :to="`/codices/${id}`">
          <h2>{{ title }}</h2>
        </router-link>
        <p>{{ content.substr(0, 20) }}...</p>
      </div>
      <div class="codex-notes">
        <ul>
          <li v-for="note in notes" :key="note.id">
            <router-link :to="`/notes/${note.id}`">{{ note.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CodexPreview',
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
