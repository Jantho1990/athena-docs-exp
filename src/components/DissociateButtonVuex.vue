<template>
    <button class="dissociate" @click="dissociateAction">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'DissociateButtonVuex',
  methods: {
    dissociateAction () {
      const { id, codexId, action, callback, redirect } = this
      const { dispatch } = this.$store

      dispatch(action, { id, codexId })

      if (callback !== null) {
        callback()
      }

      if (redirect !== null) {
        this.$router.push(redirect)
      }
    }
  },
  props: {
    action: {
      type: String
    },
    callback: {
      type: Function,
      default () {
        return null
      }
    },
    codexId: {
      type: Number
    },
    id: {
      type: Number
    },
    redirect: {
      type: String,
      default: null
    }
  }
}
</script>

<style>

</style>
