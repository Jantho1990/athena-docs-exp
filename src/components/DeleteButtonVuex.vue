<template>
    <button class="delete" @click="deleteAction">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'DeleteButtonVuex',
  methods: {
    deleteAction () {
      const { id, action, callback, redirect } = this
      const { dispatch } = this.$store

      dispatch(action, { id })

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
