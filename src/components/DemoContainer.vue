<template>
    <div>
        <h1>This is the container for the AthenaDocs demo</h1>
        <div class="codices">
            <CodexView v-for="codex in codices" v-bind="codex" :key="codex.id"/>
        </div>
    </div>
</template>

<script>
import content from '../content/demoData.json'
import CodexView from './CodexView'

export default {
  components: {
    CodexView
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
