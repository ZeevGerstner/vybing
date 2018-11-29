<template>
  <div class="nav">
    <div class="nav-container flex align-center space-between container">
      <router-link tag="div" to="/" class="nav-logo logo">Vybing</router-link>
      <div class="search">
        <span class="fa fa-search"></span>
        <input placeholder="search">
      </div>
      <div class="nav-link">
        <router-link tag="li" to="#">Genres</router-link>
        <router-link tag="li" to="/about">Rooms</router-link>
      </div>
      <!-- <div class="login">
        <button @click="isLogin = !isLogin">Login</button>
        <login-user v-if="isLogin"></login-user>
        <button @click="isSignup = !isSignup">Signup</button>
        <signup-user v-if="isSignup"></signup-user>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  display: flex;
  // flex-direction: column;

}


h1 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
