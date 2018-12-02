<template>
  <div class="home">
    <router-link
      class="tag-genre add-room-btn"
      tag="div"
      to="/createroom"
    >Create Room</router-link>

    <h1 class="category-title">TOP LIKES</h1>
    <div class="room-list container">
      
      <room-preview
        v-if="rooms"
        v-for="room in sortRoomsBy('like').slice(0,4)"
        :key="room._id"
        :room="room"
      />
    </div>

    <h1 class="category-title">TOP LISTENERS</h1>
    <div class="room-list container">
      <room-preview
        v-if="rooms"
        v-for="room in sortRoomsBy('members').slice(0,4)"
        :key="room._id"
        :room="room"
      />
    </div>
    <top-rooms
      v-for="(genre,idx) in getGenre"
      :key="idx"
      :rooms="rooms"
      :genre="genre"
    />

  </div>
</template>

<script>
import roomPreview from '../components/RoomPreview'
import topRooms from '../components/TopRooms'

export default {
  name: "home",
  components: {
    topRooms,
    roomPreview,
  },
  data () {
    return {
      isLogin: false,
      isSignup: false,
      rooms: [],
    }
  },
  created () {
    this.$socket.emit('getRoomList')
  },
  sockets: {
    setRoomList (rooms) {
      this.rooms = rooms
    }
  },
  methods: {
    sortRoomsBy (parm) {
      return this.rooms.slice().sort((room1, room2) => {
        if (Array.isArray(room1[parm])) return room2[parm].length - room1[parm].length
        return room2[parm] - room1[parm]
      })
    }
  },
  computed: {
    getGenre () {
      return this.$store.getters.getGenre
    }
  }
};
</script>

