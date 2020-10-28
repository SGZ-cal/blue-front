<template>
  <div>
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from "@/components/signupForm.vue"
export default {
  layout: 'beforeLogin',
  components: {
    SignupForm,
  }
}
</script>