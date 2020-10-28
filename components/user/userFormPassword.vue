<template>
  <input
    v-model="setPassword"
    placeholder="password"
  />
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      default: ''
    }
  },
  computed: {
    setPassword: {
      get () { return this.password },
      set (newVal) { return this.$emit('update:password', newVal) }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
