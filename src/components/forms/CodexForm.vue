<template>
  <div class="codex-form">
    <input type="text" name="title" v-model="title_">
    <textarea name="content" id="" v-model="content_"></textarea>
    <select name="notes" v-model="selectedNotes" multiple>
        <option value="-1"><em>none</em></option>
        <option :value="note.id" v-for="note in notes" :key="`noteform-${note.id}`">
            {{ note.title }}
        </option>
    </select>
    <button @click="submitCodex">Add Codex</button>
  </div>
</template>

<script>
import { ADD_CODEX } from '../../store/actions'
export default {
  name: 'CodexForm',
  data () {
    return {
      title_: this.title,
      content_: this.content,
      selectedNotes: []
    }
  },
  methods: {
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
    title: {
      type: String,
      default: 'New Codex'
    },
    content: {
      type: String,
      default: ''
    },
    notes: {
      type: Array,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.codex-form {
    max-width: 20rem;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
}
</style>
