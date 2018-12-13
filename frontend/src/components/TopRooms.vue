<template>
  <div v-if="rooms">
    <div class="top-roms-header container">
      <h1 class="">Top {{type}}</h1>
      <button
        v-if="(type !== 'listeners' && type !== 'likes')"
        @click="goToGenre(type)"
        class="genre"
      >See all by {{type}}</button>
    </div>
    <div class="room-list container">
      <room-preview v-for="room in rooms" :key="room._id" :room="room"/>
    </div>
  </div>
</template>

<script>
import roomPreview from '../components/RoomPreview'

export default {
  name: 'topRooms',
  props: {
    rooms: Array,
    type: String
  },
  methods: {
    goToGenre(genre) {
      this.$socket.emit('searchRoom', { byName: '', byType: genre })
      this.$router.push(`/RoomSearch/${genre}`)
    },
  },
  components: {
    roomPreview
  }
};
</script>
