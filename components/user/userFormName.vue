<template>
  <v-text-field
    v-model="setName"
    :rules="rules"
    :counter="max"
    label="ユーザー名を入力"
    placeholder="あなたの表示名"
    outlined
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 30
    return {
      max,
      rules: [
        v => !!v || '',
        v => (!!v && max >= v.length)
      ]
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
