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
import { mapGetters } from 'vuex'
import CodexPreview from '../CodexPreview'

export default {
  components: {
    CodexPreview
  },
  computed: {
    ...mapGetters([
      'codices',
      'notes'
    ])
  },
  data () {
    return {}
  },
  methods: {
    assignNotes () {}
  }
}
</script>

<style>

</style>
