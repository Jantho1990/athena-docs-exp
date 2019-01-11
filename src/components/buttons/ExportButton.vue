<template>
<div>
  <button @click="exportData">Export Data</button>
  <a :href="downloadLink" class="invisible" download>Export Data</a>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { saveJson } from '../../lib/file'

export default {
  name: 'ExportButton',
  computed: {
    ...mapGetters({
      wholeState: 'all'
    })
  },
  data () {
    return {
      downloadLink: ''
    }
  },
  methods: {
    exportData () {
      // this.downloadLink = `data:application/json,${JSON.stringify(this.wholeState)}`
      saveJson({
        json: this.wholeState,
        name: 'test-file.json'
      })
    }
  }
}
</script>

<style>
.invisible {
  display: none;
}
</style>
