<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="isLogin = !isLogin">Login</button>
    <login-user v-if="isLogin"></login-user>
    <button @click="isSignup = !isSignup">Signup</button>
    <signup-user v-if="isSignup"></signup-user>
    
    <router-link to="/createroom">Create Room</router-link>


    <div v-if="rooms" v-for="room in rooms" :key="room._id">
      <router-link class="room-name" :to="'/room/'+room._id">{{room.name}}</router-link>
    </div>
  </div>
</template>

<script>
import loginUser from "../components/Login";
import signupUser from "../components/Signup";

export default {
  name: "home",
  components: {
    loginUser,
    signupUser
  },
  data() {
    return {
      isLogin: false,
      isSignup: false,
      rooms: []
    };
  },
  created() {
    this.$socket.emit("getRoomList");
  },
  sockets: {
    setRoomList(rooms) {
      this.rooms = rooms;
    }
  }
};
</script>

