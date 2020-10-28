<template>
  <div>
    index.vue
  </div>
</template>


<script>
// import Index from '@/components/Index.vue'
export default {
  // component: {
  //   Index
  // },
  layout ({ store }) {
    return store.state.loggedIn ? 'default' : 'welcome'
  }
}
</script>
