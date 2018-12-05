<template>
  <section class="profile ">
    <h2 class="profile-name container">{{user.name}}</h2>
    <h2 class="profile-name container">Created Room:</h2>
    <div class="room-list container">
      <room-preview v-for="room in user.roomsCreated" :key="room._id" :room="room"/>
    </div>
    <h2 class="profile-name container">Liked Room:</h2>
    <div class="room-list container">
      <room-preview v-for="room in user.roomsLiked" :key="room._id" :room="room"/>
    </div>
  </section>
</template>

<script>
import roomPreview from '../components/RoomPreview'

export default {
  data() {
    return {
      user: Object
    }
  },
  components: {
    roomPreview
  },
  created() {
    const userId = this.$route.params.userId;
    this.$socket.emit('getUserById', userId)
  },
  computed: {

  },
  sockets: {
    setUserProfile: function (user) {
      this.user = user[0]
    }
  },
  methods: {
    togglePlayer (room) {
      this.$children.forEach(currRoom => {
        if (currRoom !== room) currRoom.isOpen = false;
      });
      room.isOpen = !room.isOpen;
    }
  }
}
</script>

<style>
</style>
