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
import { DELETE_CODEX } from '../../store'
import CodexPreview from '../CodexPreview'
import CodexForm from '../forms/CodexForm'
import DeleteButton from '../DeleteButtonVuex'

export default {
  components: {
    CodexPreview,
    CodexForm,
    DeleteButton
  },
  computed: {
    ...mapGetters([
      'codices',
      'notes'
    ])
  },
  data () {
    return {
      deleteAction: DELETE_CODEX
    }
  },
  methods: {
    assignNotes () {}
  }
}
</script>

<style>

</style>
