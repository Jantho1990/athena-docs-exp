<template>
    <div class="codex">
        <h2>This is a codex page</h2>
        <p>{{ content }}</p>
        <div class="notes">
            <NotePage v-for="note in notes" v-bind="note" :key="note.id"/>
        </div>
    </div>
</template>

<script>
import NotePage from './NotePage'

export default {
  name: 'CodexPage',
  components: {
    NotePage
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

<style>
</style>
