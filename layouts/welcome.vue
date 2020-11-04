<template>
  <v-app>
    <BeforeLoginHeader />
    <a>未ログイン状態</a>
  </v-app>
</template>

<script>
import BeforeLoginHeader from '@/components/beforeLoginHeader.vue'
export default {
  components: {
    BeforeLoginHeader,
  }
}
</script>
