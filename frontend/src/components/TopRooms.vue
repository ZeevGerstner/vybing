<template>
  <div v-if="rooms">
    <h1 class="category-title">Top {{type}}</h1>
    <router-link
      v-if="(type !== 'listeners' && type !== 'likes')"
      :to="'/RoomSearch/' + type"
      class="genre"
    >See all by {{type}}</router-link>
    <div class="room-list container">
      <room-preview
        v-for="room in rooms"
        :key="room._id"
        :room="room"
      />
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
  components: {
    roomPreview
  }
};
</script>
