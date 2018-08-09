<template>
  <div>
    <h2>Codices Page</h2>
    <div class="codices">
      <div class="codex-form-container">
        <CodexForm :notes="notes"/>
      </div>
      <div v-for="codex in codices" :key="codex.id">
        <CodexPreview v-bind="codex"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CodexPreview from '../CodexPreview'
import CodexForm from '../forms/CodexForm'

export default {
  components: {
    CodexPreview,
    CodexForm
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
