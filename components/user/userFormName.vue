<template>
  <div>
    <label>表示名</label>
    <input
      v-model="setName"
      placeholder="あなたの表示名"
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    setName: {
      get () { return this.name },
      set (newVal) { return this.$emit('update:name', newVal) }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
