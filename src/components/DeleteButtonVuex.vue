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
      const { id, action, callback } = this
      const { dispatch } = this.$store
      dispatch(action, { id })
      if (callback !== null) {
        callback()
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
