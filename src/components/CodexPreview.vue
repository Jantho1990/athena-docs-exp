<template>
    <div class="codex-container">
      <div class="codex">
        <router-link :to="`/codices/${id}`" class="codex-title">
          <h2>{{ title }}</h2>
        </router-link>
          <!-- <button class="codex-delete" @click="deleteCodex">Delete</button> -->
          <delete-button
            :action="action"
            :id="id"
          >
            Delete
          </delete-button>
        <p class="codex-content">{{ content.substr(0, 20) }}...</p>
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
import { DELETE_CODEX } from '../store'
import DeleteButton from './DeleteButtonVuex'

export default {
  name: 'CodexPreview',
  components: {
    DeleteButton
  },
  data () {
    return {
      action: DELETE_CODEX
    }
  },
  methods: {
    deleteCodex () {
      const { id } = this
      const { dispatch } = this.$store
      dispatch(DELETE_CODEX, { id })
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
    display: grid;
    grid-template-areas:
      "xtitle xdelete"
      "xcontent xcontent";
    grid-template-columns: 3fr 0.5fr;
    grid-template-rows: 1fr 1fr;
    .codex-title {
      grid-area: xtitle;
    }
    .codex-delete {
      grid-area: xdelete;
    }
    .codex-content {
      grid-area: xcontent;
    }
  }
  .codex-notes {
    grid-area: codex-right;
  }
}
</style>
