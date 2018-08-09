<template>
  <div class="note-form">
    <input type="text" name="title" v-model="title_">
    <textarea name="content" id="" v-model="content_"></textarea>
    <button @click="submitNote">Add Note</button>
  </div>
</template>

<script>
import { ADD_NOTE } from '../../store'
export default {
  name: 'NoteForm',
  data () {
    return {
      title_: this.title,
      content_: this.content
    }
  },
  methods: {
    submitNote () {
      let { title_: title, content_: content } = this
      const note = {
        title,
        content,
        notes: []
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
