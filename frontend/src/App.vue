<template>
  <div id="app">
    <app-header></app-header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/room">Room</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
import appHeader from "./components/appHeader";
export default {
  name: 'app',
  components: {
    appHeader
  }
};
</script>


<style lang="scss">

</style>
