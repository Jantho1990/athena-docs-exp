<template>
  <div class="codex-page">
    <CodexView v-bind="codex"/>
  </div>
</template>

<script>
import CodexView from '../CodexView'

export default {
  name: 'CodexPage',
  components: {
    CodexView
  },
  computed: {
    codex () {
      return this.$store.getters.codex(this.id)
    }
  },
  data () {
    return {
      id: Number(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
