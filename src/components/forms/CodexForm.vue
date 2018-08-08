<template>
  <div class="codex-form">
    <input type="text" name="title" v-model="title_">
    <textarea name="content" id="" v-model="content_"></textarea>
    <button @click="submitCodex">Add Codex</button>
  </div>
</template>

<script>
import { ADD_CODEX } from '../../store'
export default {
  name: 'CodexForm',
  data () {
    return {
      title_: this.title,
      content_: this.content
    }
  },
  methods: {
    submitCodex () {
      let { title_: title, content_: content } = this
      const codex = {
        title,
        content,
        notes: []
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
    }
  }
}
</script>

<style>
</style>
