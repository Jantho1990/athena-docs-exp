<template>
  <div class="note">
    <delete-button
      :action="action"
      :id="id"
      :redirect="'/notes'"
    >
      Delete Note
    </delete-button>
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { DELETE_NOTE } from '../store/actions'
import DeleteButton from './DeleteButtonVuex'

export default {
  name: 'NoteView',
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
