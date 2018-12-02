<template>
  <div v-if="getRooms">
    <router-link :to="'/RoomSearch/' + genre"  class="genre">See all by {{genre}}</router-link>
    <h1 class="category-title">Top {{genre}}</h1>
    <div class="room-list container">
      <room-preview
        v-for="room in roomsByGenre"
        :key="room._id"
        :room="room"
      />
    </div>
    {{roomsByGenre}}
  </div>
</template>

<script>
import roomPreview from '../components/RoomPreview'

export default {
  name: 'topRooms',
  props: {
    rooms: Array,
    genre: String
  },
  data () {
    return {
      roomsByGenre: []
    }
  },
  methods: {
    sortRoomsByGenre () {
      let filteredRooms = this.rooms.filter(room => {
        return room.type === this.genre
      })
      this.roomsByGenre = filteredRooms.slice(0, 4).sort((room1, room2) => {
        return room2.likes - room1.likes
      })
    }
  },
  created () {
    return this.sortRoomsByGenre()
  },
  computed: {
    getRooms () {
      return this.roomsByGenre.length > 1
    }
  },
  components: {
    roomPreview
  }
};
</script>
