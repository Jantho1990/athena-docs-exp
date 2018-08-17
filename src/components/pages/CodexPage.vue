<template>
  <div class="codex-page">
    <CodexView v-if="!editModeOn" v-bind="codex"/>
    <CodexViewForm v-if="editModeOn" v-bind="codex"/>
  </div>
</template>

<script>
import CodexView from '../CodexView'
import CodexViewForm from '../forms/CodexViewForm'

export default {
  name: 'CodexPage',
  components: {
    CodexView,
    CodexViewForm
  },
  computed: {
    codex () {
      return this.$store.getters.codex(this.id)
    }
  },
  data () {
    return {
      editModeOn: true,
      id: Number(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
