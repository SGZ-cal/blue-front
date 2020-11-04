<template>
  <BeforeLoginFormCard #form-card-content>
    <v-form
      ref="form"
      v-model="isValid"
    >
      <UserFormName
        :name.sync="params.user.name"
      />
      <UserFormEmail
        :email.sync="params.user.email"
      />
      <UserFormPassword
        :password.sync="params.user.password"
      />
      <v-btn
        :disabled="!isValid || loading"
        :loading="loading"
        block
        color="blue"
        class="white--text"
        @click="signup"
      >
        登録する
      </v-btn>
    </v-form>
  </BeforeLoginFormCard>
</template>

<script>
import BeforeLoginFormCard from '@/components/beforeLogin/beforeLoginFormCard.vue'
import UserFormName from '@/components/user/userFormName.vue'
import UserFormEmail from '@/components/user/userFormEmail.vue'
import UserFormPassword from '@/components/user/userFormPassword.vue'
export default {
  layout: 'beforeLogin',
  components: {
    BeforeLoginFormCard,
    UserFormName,
    UserFormEmail,
    UserFormPassword,
  },
  data () {
    return {
      isValid: false,
      loading: false,
      params: {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    signup () {
      this.loading = true
      setTimeout(() => {
        this.formReset()
        this.loading = false
      }, 1500)
    },
    formReset () {
      this.$refs.form.reset()
      this.params = { user: {name: '', email: '', password: '' } }
    }
  },
}
</script>