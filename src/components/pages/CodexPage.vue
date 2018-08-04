<template>
  <div class="codex-page">
    <CodexView v-bind="codex"/>
  </div>
</template>

<script>
import CodexView from '../CodexView'
import content from '../../content/demoData.json'

export default {
  name: 'CodexPage',
  components: {
    CodexView
  },
  computed: {
    codex () {
      // TODO: Figure out why this needs to be a computed
      return content.codices.filter(codex => codex.id === this.id)
        .map(codex => {
          return {
            ...codex,
            notes: codex.notes
              .map(noteId => {
                return content.notes.find(note => note.id === noteId)
              })
              .filter(note => note !== undefined)
          }
        })
    }
  },
  data () {
    return {
      codice: content.codices,
      // codex: content.codices.filter(codex => codex.id === this.id),
      id: Number(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
