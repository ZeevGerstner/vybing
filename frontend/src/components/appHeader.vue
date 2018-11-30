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
        <li @mouseover="isGenre = true">▼Genres
          <div @mouseover="isGenre = true" @mouseleave="isGenre = false" v-if="isGenre" class="genres">
            <router-link class="genre" v-for="(genre, idx) in genres" :key="idx" :to="'/genre/'+genre">{{genre}}</router-link>
          </div>
        </li>
        <router-link tag="li" to="/">Rooms</router-link>
      </div>

      <div class="login">
        <li @click="isLogin = !isLogin">Login</li>
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
      isSearch: false,
      isGenre: false,
      genres: ['Hip Hop', 'Rock', 'Pop', 'Funk']
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

</style>
