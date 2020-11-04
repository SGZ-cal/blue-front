<template>
  <v-app>
    <LoggedinHeader />
    <nuxt />
  </v-app>
</template>

<script>
import LoggedinHeader from '@/components/loggedIn/loggedinHeader.vue'
export default {
  components: {
    LoggedinHeader,
  }
}
</script>