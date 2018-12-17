<template>
  <section class="login-user">
    <form class="login-form" @submit.prevent="loginUser">
      <input
        ref="userNameLogin"
        class="login-input"
        placeholder="User Name"
        v-model="user.name"
        type="text"
      >
      <input class="login-input" placeholder="Password" v-model="user.password" type="password">
      <button class="login-btn">Login</button>
    </form>
    <div class="login-more">
      <h2 class="go-signup-btn" @click="goToSignup">Signup</h2>
      <h2 class="wrong" v-if="isWrong">Wrong!</h2>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        password: ''
      },
      isWrong: false,
      currUser: null
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch({ type: 'login', user: this.user })
        .then(user => {
          if (!user) {
            this.isWrong = true
          } else {
            this.isWrong = false
            this.user = { name: '', password: '' }
            this.$emit('closeLogin')
          }
        })
    },
    goToSignup() {
      this.$emit('closeLogin')
      this.$router.push('/Signup')
    }
  },
  mounted() {
    this.$refs.userNameLogin.focus()
  }


}
</script>

<style>
</style>
