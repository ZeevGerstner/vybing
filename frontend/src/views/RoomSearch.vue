<template>
  <section>
    <h2 class="category-title">{{genre}}</h2>
    <div
      v-if="rooms.length > 0"
      class="room-list container"
    >
      <room-preview
        v-if="rooms"
        v-for="room in rooms"
        :key="room._id"
        :room="room"
      />
    </div>
    <div v-else>
      <h2 class="category-title">There are no rooms in this genre!</h2>
    </div>
  </section>
</template>

<script>
import roomPreview from '../components/RoomPreview'

export default {
  name: 'roomSearch',
  components: {
    roomPreview
  },
  data () {
    return {
      rooms: [],
      genre: '',
    }
  },
  created () {
    const genre = this.$route.params.genreName;
    if (genre) {
      this.genre = genre
    }
  },
  watch: {
    '$route.params.genreName': function (genre) {
      if (genre) {
        this.genre = genre
      }
    }
  },
  sockets: {
    setRoomsFilter: function (filterdRoom) {
      this.rooms = filterdRoom
    }
  }
}
</script>
