<template>
  <div class="home">
    <div class="home-img2"></div>
    <div class="home-img">
      <h2 class="home-title-txt">
        Pick a station and Join the Vybe!
      </h2>
    </div>
    <router-link
      class="tag-genre add-room-btn"
      tag="div"
      to="/createroom"
    >Create Station</router-link>

    <top-rooms-first
      class="container"
      :type="'likes'"
      :rooms="getRoomsBy('likes')"
    />

    <top-rooms
      v-for="(genre,idx) in getGenre"
      v-if="getRoomsBy(genre).length > 3"
      :key="idx"
      :type="genre"
      :rooms="getRoomsBy(genre)"
    />
  </div>
</template>

<script>
import topRooms from '../components/TopRooms'
import topRoomsFirst from '../components/TopRoomsFirst'

export default {
  name: 'home',
  components: {
    topRooms,
    topRoomsFirst
  },
  data () {
    return {
      isLogin: false,
      isSignup: false,
      rooms: [],
      isFirstLoaded: true,
    }
  },
  created () {
    this.$socket.emit("getRoomList");
  },
  sockets: {
    setRoomList (rooms) {
      this.rooms = rooms
      if (this.isFirstLoaded) {
        this.isFirstLoaded = false
        this.$nextTick(() => {
          window.scrollTo({
            top: 100,
            left: 0,
            behavior: 'smooth'
          });
        })
      }
    }
  },
  methods: {
    getRoomsBy (type) {
      var roomsToshow = this.rooms.slice();
      if (type !== 'likes') {
        roomsToshow = this.rooms
          .filter(room => room.type === type)
      }
      return roomsToshow
        .sort((a, b) => b.userLikedIds.length - a.userLikedIds.length)
        .slice(0, 4);
    },
  },
  computed: {
    getGenre () {
      return this.$store.getters.getGenre;
    }
  }
};
</script>

