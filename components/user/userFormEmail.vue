<template>
  <div>
    <label>Email</label>
    <input
      v-model="setEmail"
      placeholder="you@example.com"
    >
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ''
    }
  },
  computed: {
    setEmail: {
      get () { return this.email },
      set (newVal) { return this.$emit('update:email', newVal) }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
