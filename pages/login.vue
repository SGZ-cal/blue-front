<template>
  <BeforeLoginFormCard #form-card-content>
    <v-form
      ref="form"
      v-model="isValid"
    >
      <UserFormEmail 
        :email.sync="params.auth.email"
        no-validation
      />
      <UserFormPassword
        :password.sync="params.auth.password"
        no-validation
      />
      <v-card-actions>
        <nuxt-link
          to="#"
          class="body-2 text-decoration-none"
        >
          パスワードを忘れた?
        </nuxt-link>
      </v-card-actions>
      <v-card-text class="px-0">
        <v-btn
          :disabled="!isValid || loading"
          :loading="loading"
          block
          color="myblue"
          class="white--text"
          @click="login"
        >
          ログインする
        </v-btn>
      </v-card-text>
    </v-form>
  </BeforeLoginFormCard>
</template>

<script>
import BeforeLoginFormCard from '@/components/beforeLogin/beforeLoginFormCard'
import UserFormEmail from '@/components/user/userFormEmail.vue'
import UserFormPassword from '@/components/user/userFormPassword.vue'
export default {
  layout: 'beforeLogin',
  data () {
    return {
      isValid: false,
      loading: false,
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
      this.loading = true
      setTimeout (() => {
        this.$store.dispatch('login')
        this.$router.replace('/')
        this.loading = false
      }, 1500)
    }
  }
}
</script>