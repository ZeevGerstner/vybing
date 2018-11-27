<template>
 <div id="nav">
      <h1>LOGO</h1>
      <div class="nav-link">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/room">Room</router-link>
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
