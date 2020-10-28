<template>
  <div>
    <UserFormName />
    <UserFormEmail />
    <UserFormPassword />
  </div>
</template>

<script>
import UserFormName from '@/components/user/userFormName.vue'
import UserFormEmail from '@/components/user/userFormEmail.vue'
import UserFormPassword from '@/components/user/userFormPassword.vue'
export default {
  components: {
    UserFormName,
    UserFormEmail,
    UserFormPassword,
  }
}
</script>