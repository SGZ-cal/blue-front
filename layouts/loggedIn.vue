<template>
  <div>
    <LoggedinHeader />
    <nuxt />
  </div>
</template>

<script>
import LoggedinHeader from '@/components/loggedIn/loggedinHeader.vue'
export default {
  components: {
    LoggedinHeader,
  }
}
</script>