<template>
  <div>
    <form @submit.prevent="login">
      <UserFormEmail 
        :email.sync="params.auth.email"
      />
      <UserFormPassword
        :password.sync="params.auth.password"
      />
      <a href="#" class="forget-password">
        パスワードを忘れた場合
      </a>
      <button
        class="button-login"
        type="submit"
      >
        ログインする
      </button>
    </form>
  </div>
</template>

<script>
import UserFormEmail from '@/components/user/userFormEmail.vue'
import UserFormPassword from '@/components/user/userFormPassword.vue'
export default {
  layout: 'beforeLogin',
  data () {
    return {
      params: {
        auth: {
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    login () {
      setTimeout (() => {
        this.$store.dispatch('login')
        this.$router.replace('/')
      }, 1500)
    }
  }
}
</script>