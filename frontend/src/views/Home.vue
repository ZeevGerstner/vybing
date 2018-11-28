<template>
  <div class="home">
    <button @click="isLogin = !isLogin">Login</button>
    <login-user v-if="isLogin"></login-user>  
     <button @click="isSignup = !isSignup">Signup</button>
    <signup-user v-if="isSignup"></signup-user>   
  </div>
</template>

<script>
import loginUser from '../components/Login'
import signupUser from '../components/Signup'

export default {
  name: 'home',
  components: {
    loginUser,
    signupUser
  },
  data(){
    return{
      isLogin: false,
      isSignup: false
    }
  }
}
</script>
