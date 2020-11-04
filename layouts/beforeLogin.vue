<template>
  <v-app>
    <BeforeLoginHeader />
    <nuxt />
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