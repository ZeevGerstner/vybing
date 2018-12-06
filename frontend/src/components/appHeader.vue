<template>
  <div class="nav">
    <div class="nav-container flex align-center space-between container">
      <img @click="goToRooms" class="nav-logo" src="../assets/logo2.png">
      <img @click="goToRooms" class="nav-logo-mini" src="../assets/vybingmini.png">

      <div ref="search" class="search">
        <input @input="searchRooms" v-model="filter.byName" placeholder="search">
        <span class="fa fa-search"></span>

        <ul class="rooms-results" v-if="isSearch">
          <li class="all-results" @click="seeAllResults">See all results for: {{filter.byName}}</li>
          <li
            v-for="room in roomsResults"
            :key="room._id"
            @click="goToRoomById(room._id)"
          >{{room.name}}</li>
        </ul>
      </div>

      <div class="nav-link">
        <li @click="toggleOpen('Genre')">
          <span class="navbar-txt">▼Genres</span>
          <span class="navbar-icon">
            <i class="fas fa-th-list"></i>
          </span>
          <div v-if="isOpen === 'Genre'" class="genres">
            <div
              class="genre"
              v-for="(genre, idx) in getGenre"
              :key="idx"
              @click="searchByGenre(genre)"
            >{{genre}}</div>
          </div>
        </li>
        <li @click="goToRooms">
          <span class="navbar-txt">Rooms</span>
          <span class="navbar-icon">
            <i class="fas fa-home"></i>
          </span>
        </li>
        <li class="login">
          <div v-if="!isUserLogin" @click="toggleOpen('Login')">
            <span id="LOGIN-IS-HERE" class="navbar-txt">Login</span>
            <span id="login" class="navbar-icon">
              <i class="fas fa-user"></i>
            </span>
          </div>
          <login-user @closeLogin="isOpen = null" v-if="isOpen === 'Login'"></login-user>
          <router-link
            class="navbar-userName"
            :to="'/profile/'+getUser._id"
            v-if="isUserLogin"
          >{{getUser.name}}</router-link>
        </li>
        <li class="navbar-userName" v-if="isUserLogin" @click="logoutUser">Logout</li>
      </div>
    </div>
    <div v-if="isGoTop" class="home-go-top" @click="goTop">
      <i class="fas fa-arrow-circle-up"></i>
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
  data() {
    return {
      isOpen: null,
      roomsResults: [],
      isSearch: false,
      filter: {
        byType: '',
        byName: '',
      },
      isGoTop: false,
    }
  },
  created() {

  },
  methods: {
    changeCss() {
      var nav = document.querySelector('.nav')
      if (window.scrollY > 200) {
        nav.classList.remove('start-navbar')
      } else {
        nav.classList.add('start-navbar')
      }
      if (window.scrollY > 600) {
        this.isGoTop = true
      } else {
        this.isGoTop = false
      }
    },
    toggleOpen(val) {
      if (this.isOpen === val) this.isOpen = null
      else if (this.isOpen === null) this.isOpen = val
      else this.isOpen = val
    },
    searchRooms() {
      console.log('search: ', this.filter)
      this.$socket.emit('searchRoom', this.filter)
      this.isSearch = true
      if (this.filter.byName === '') this.isSearch = false
    },
    goToRoomById(roomId) {
      this.$router.push('/room/' + roomId)
      this.filter.byName = ''
      this.isSearch = false
    },
    seeAllResults() {
      this.$router.push('/RoomSearch')
      this.searchRooms()
      this.isSearch = false
    },
    searchByGenre(genre) {
      this.filter.byType = genre;
      this.searchRooms()
      this.$router.push('/RoomSearch/' + genre)
    },
    goToRooms() {
      this.filter = {
        byType: '',
        byName: '',
      }
      this.$router.push('/')
    },
    logoutUser() {
      this.$store.commit({ type: 'logoutUser' })
    },
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  watch: {
    '$route.params.genreName': {
      immediate: true,
      handler(genre) {
        if (genre) {
          this.filter.byType = genre
          this.searchRooms()
        }
      }
    },
    $route: {
      immediate: true,
      handler(route) {
        console.log('inside route watch', route)
        if (route.name === 'home') {
          window.addEventListener('scroll', this.changeCss);
          // this.$refs.navbar.classList.add('start-navbar')
          this.$nextTick(() => {
            var nav = document.querySelector('.nav')
            nav.classList.add('start-navbar')
            nav.classList.add('home-nav-bar')
          });

        } else {
          this.isGoTop = false
          window.removeEventListener('scroll', this.changeCss)
          this.$nextTick(() => {
            var nav = document.querySelector('.nav')
            nav.classList.remove('home-nav-bar')
            nav.classList.remove('start-navbar')
          })
        }
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
    getGenre() {
      return this.$store.getters.getGenre
    },
    getUser() {
      return this.$store.getters.getCurrUser
    },
    isUserLogin() {
      return this.$store.getters.isUserLogin
    },
  },
}
</script>