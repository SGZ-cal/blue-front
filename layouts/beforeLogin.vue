<template>
  <div>
    <BeforeLoginHeader />
    <nuxt />
  </div>
</template>

<script>
import BeforeLoginHeader from '@/components/beforeLoginHeader.vue'
export default {
  component: {
    BeforeLoginHeader,
  }
}
</script>