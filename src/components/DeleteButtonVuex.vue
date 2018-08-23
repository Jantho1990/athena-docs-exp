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
      const { id, action } = this
      const { dispatch } = this.$store
      dispatch(action, { id })
    }
  },
  props: {
    action: {
      type: String
    },
    id: {
      type: Number
    }
  }
}
</script>

<style>

</style>
