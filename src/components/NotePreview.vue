<template>
  <div class="note">
    <delete-button
      :action="action"
      :id="id"
    >
      Delete Note
    </delete-button>
    <router-link :to="`/notes/${id}`">
      <h3>{{ title }}</h3>
    </router-link>
    <p>{{ content.substr(0, 50) }}</p>
  </div>
</template>

<script>
import { DELETE_NOTE } from '../store'
import DeleteButton from './DeleteButtonVuex'

export default {
  name: 'NotePreview',
  components: {
    DeleteButton
  },
  data () {
    return {
      action: DELETE_NOTE
    }
  },
  props: {
    content: {
      type: String,
      default: 'Filler content'
    },
    id: {
      type: Number
    },
    // TODO: I hate needing titles, can we
    // find a way to hide or remove them?
    title: {
      type: String,
      default: 'This is a note view'
    }
  }
}
</script>

<style>
</style>
