<template>
  <header class="header-container">
    <AppLogo />
    <v-spacer />
    <SignupLink />
    <LoginLink />
  </header>
</template>

<script>
import AppLogo from '@/components/ui/appLogo.vue'
import SignupLink from '@/components/beforeLogin/signupLink.vue'
import LoginLink from '@/components/beforeLogin/loginLink.vue'
export default {
  components: {
    AppLogo,
    SignupLink,
    LoginLink
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  padding: 10px 5%;
  display: flex;
  justify-content: flex-end;
  border-bottom: solid 0.5px gray;
}
</style>
