<template>
  <div class="note-form">
    <input type="text" name="title" v-model="title_">
    <textarea name="content" id="" v-model="content_"></textarea>
    <select name="codices" v-model="selectedCodices" multiple>
        <option value="-1"><em>none</em></option>
        <option :value="codex.id" v-for="codex in codices" :key="`noteform-${codex.id}`">
            {{ codex.title }}
        </option>
    </select>
    <button @click="submitNote">Add Note</button>
  </div>
</template>

<script>
import { ADD_NOTE } from '../../store/actions'
export default {
  name: 'NoteForm',
  data () {
    return {
      title_: this.title,
      content_: this.content,
      selectedCodices: []
    }
  },
  methods: {
    submitNote () {
      let { title_: title, content_: content, selectedCodices: codices } = this
      const note = {
        title,
        content,
        codices
      }
      const { dispatch } = this.$store
      dispatch(ADD_NOTE, {
        note
      })
    }
  },
  props: {
    title: {
      type: String,
      default: 'New Note'
    },
    content: {
      type: String,
      default: ''
    },
    codices: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.note-form {
    max-width: 20rem;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
}
</style>
