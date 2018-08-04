<template>
    <div class="note">
        <h3>This is a note page</h3>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
  name: 'NoteView',
  props: {
    content: {
      type: String,
      default: 'Filler content'
    },
    id: {
      type: Number
    }
  }
}
</script>

<style>
</style>
