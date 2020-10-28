<template>
  <div>
    <form>
      <UserFormName
        :name.sync="params.user.name"
      />
      <UserFormEmail
        :email.sync="params.user.email"
      />
      <UserFormPassword
        :password.sync="params.user.password"
      />
      <button
        class="button"
        @click="signup"
      >
        登録する
      </button>
    </form>
  </div>
</template>

<script>
import UserFormName from '@/components/user/userFormName.vue'
import UserFormEmail from '@/components/user/userFormEmail.vue'
import UserFormPassword from '@/components/user/userFormPassword.vue'
export default {
  layout: 'beforeLogin',
  components: {
    UserFormName,
    UserFormEmail,
    UserFormPassword,
  },
  data () {
    return {
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
      setTimeout(() => {
        this.formReset()
      }, 1500)
    },
    formReset () {
      // this.$refs.form.reset()
      this.params = { user: {name: '', email: '', password: '' } }
    }
  },
}
</script>