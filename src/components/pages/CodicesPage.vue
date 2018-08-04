<template>
  <div>
    <h2>Codices Page</h2>
    <div class="codices">
      <div v-for="codex in codices" :key="codex.id">
        <router-link :to="`/codex/${codex.id}`">
          <CodexView v-bind="codex"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../../content/demoData.json'
import CodexView from '../CodexView'

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
