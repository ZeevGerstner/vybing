<template>
  <div
    class="nav"
    @mouseleave="isGenre = false"
  >
    <div class="nav-container flex align-center space-between container">
      <div
        @click="goToRooms"
        class="nav-logo logo"
      >Vybing</div>

      <div class="search">
        <input
          @input="searchRooms"
          v-model="filter.byName"
          placeholder="search"
        >
        <span class="fa fa-search"></span>

        <ul
          class="rooms-results"
          v-if="isSearch"
        >
          <li
            class="all-results"
            @click="seeAllResults"
          >See all results for: {{filter.byName}}</li>
          <li
            v-for="room in roomsResults"
            :key="room._id"
            @click="goToRoomById(room._id)"
          >{{room.name}}</li>
        </ul>
      </div>

      <div class="nav-link">
        <li @mouseover="isGenre = true">▼Genres
          <div
            @mouseover="isGenre = true"
            @mouseleave="isGenre = false"
            v-if="isGenre"
            class="genres"
          >
            <div
              class="genre"
              v-for="(genre, idx) in getGenre"
              :key="idx"
              @click="searchByGenre(genre)"
            >{{genre}}</div>
          </div>
        </li>
        <li @click="goToRooms">Rooms</li>
      </div>

      <div class="nav-link login">
        <li
          v-if="!isUserLogin"
          @click="isLogin = !isLogin"
        >Login</li>
        <login-user
          @closeLogin="isLogin = false"
          v-if="isLogin"
        ></login-user>
        <router-link
          tag="li"
          :to="'/profile/'+getUser._id"
          v-if="isUserLogin"
        >{{getUser.name}} </router-link>
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
  data () {
    return {
      isLogin: false,
      roomsResults: [],
      isSearch: false,
      isGenre: false,
      filter: {
        byType: '',
        byName: '',
      }
    }
  },
  methods: {
    searchRooms () {
      console.log('search: ', this.filter)
      this.$socket.emit('searchRoom', this.filter)
      this.isSearch = true
      if (this.filter.byName === '') this.isSearch = false
    },
    goToRoomById (roomId) {
      this.$router.push('/room/' + roomId)
      this.filter.byName = ''
      this.isSearch = false
    },
    seeAllResults () {
      this.$router.push('/RoomSearch')
      this.searchRooms()
      this.isSearch = false
    },
    searchByGenre (genre) {
      this.filter.byType = genre;
      this.searchRooms()
      this.$router.push('/RoomSearch/' + genre)
    },
    goToRooms () {
      this.filter = {
        byType: '',
        byName: '',
      }
      this.$router.push('/')
    }
  },
  watch: {
    '$route.params.genreName': function (genre) {
      if (genre) {
        this.filter.byType = genre
      }
    },
  },
  sockets: {
    setRoomsFilter: function (filteredRoom) {
      console.log(filteredRoom)
      this.roomsResults = filteredRoom
    }
  },
  computed: {
    getGenre () {
      return this.$store.getters.getGenre
    },
    getUser () {
      return this.$store.getters.getCurrUser
    },
    isUserLogin () {
      return this.$store.getters.isUserLogin
    },
  },
}
</script>