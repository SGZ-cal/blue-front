<template>
  <div>
    <label>Password</label>
    <input
      v-model="setPassword"
      placeholder="password"
    >
  </div>
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
