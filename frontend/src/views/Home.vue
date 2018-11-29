<template>
  <div class="home">
    <router-link class="tag-genre add-room-btn" tag="div" to="/createroom">Create Room</router-link>
    
    <h1 class="category-title">TOP LISTENERS</h1>
    
    <div class="room-list container">
        <room-preview v-if="rooms" v-for="room in rooms" :key="room._id" :room="room" />  
    </div>

  </div>
</template>

<script>
import roomPreview from '../components/RoomPreview'

export default {
  name: "home",
  components: {
    roomPreview
  },
  data() {
    return {
      isLogin: false,
      isSignup: false,
      rooms: []
    };
  },
  created() {
    this.$socket.emit("getRoomList");
  },
  sockets: {
    setRoomList(rooms) {
      this.rooms = rooms;
    }
  }
};
</script>

