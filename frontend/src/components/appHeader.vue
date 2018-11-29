<template>
  <div class="nav">
    <div class="nav-container flex align-center space-between container">
      <router-link tag="div" to="/" class="nav-logo logo">Vybing</router-link>
      <div class="search">
        <span class="fa fa-search"></span>
        <input @input="searchRooms" v-model="search" placeholder="search">
        <ul class="rooms-results" v-if="isSearch">
          <li v-for="room in roomsResults" :key="room._id" @click="goToRoomById(room._id)">
            {{room.name}}
          </li>
        </ul>
      </div>
      <div class="nav-link">
        <router-link tag="li" to="#">Genres</router-link>
        <router-link tag="li" to="/about">Rooms</router-link>
      </div>
      <div class="login">
        <button @click="isLogin = !isLogin">Login</button>
        <login-user v-if="isLogin"></login-user>
      </div>
    </div>
  </div>
</template>

<script>
import loginUser from "../components/Login";

export default {
  name: 'appHeader',
  props: {
    msg: String
  },
  components: {
    loginUser
  },
  data(){
    return{
      isLogin: false,
      roomsResults: [],
      search:'',
      isSearch: false
    }
  },
  methods:{
    searchRooms(){
      console.log(this.search)
      this.$socket.emit('searchRoom',this.search)
      this.isSearch = true
      if(this.search === '') this.isSearch = false
    },
    goToRoomById(roomId){
      this.$router.push('/room/'+roomId)
      this.search = ''
      this.isSearch = false
    }
  },
  sockets:{
    setRoomsFilter: function (filteredRoom){
      console.log(filteredRoom)
      this.roomsResults = filteredRoom
    }
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
