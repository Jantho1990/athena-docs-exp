<template>
  <div>
    <h2>Codices Page</h2>
    <div class="codices">
      <div v-for="codex in codices" :key="codex.id">
        <CodexPreview v-bind="codex"/>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../../content/demoData.json'
import CodexPreview from '../CodexPreview'

export default {
  components: {
    CodexPreview
  },
  data () {
    return {
      codices: content.codices.map(codex => {
        return {
          ...codex,
          notes: codex.notes
            .map(noteId => {
              return content.notes.find(note => note.id === noteId)
            })
            .filter(note => note !== undefined)
        }
      }),
      notes: content.notes
    }
  },
  methods: {
    assignNotes () {}
  }
}
</script>

<style>

</style>
