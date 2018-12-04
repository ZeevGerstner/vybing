<template>
  <div
    v-if="room"
    class="container room"
  >
    <nav class="nav-room">
      <div class="room-title">
        <h2 class="room-name">{{room.name}}</h2>
        <h4
          v-if="isAdmin"
          class="room-creator"
        >creator: <span
            class="room-creator-hover"
            @click="isUserPrev = !isUserPrev"
          >{{adminRoom.name}}</span></h4>
        <user-preview
          v-show="isUserPrev"
          :user="adminRoom"
        ></user-preview>
      </div>
      <div class="room-details">
        <div class="tag-genre room-genre">{{room.type}}</div>

        <div class="room-icon">
          <img
            class="icon-img"
            src="../assets/imgs/LISTENERS-ICON.png"
          >
          <h4 class="icon-count">{{room.listeners.length}}</h4>
        </div>
        <div
          class="room-icon"
          @click="toggleLike"
        >
          <img
            :class="userLiked"
            class="icon-img"
            src="../assets/imgs/EAR-ICON.png"
          >

          <h4 class="icon-count">{{room.likes}}</h4>
        </div>
      </div>
    </nav>

    <div class="room-player">
      <youtube-player
        :playlist="room.playlist"
        @updatePlaylist="updatePlaylist"
      ></youtube-player>
    </div>
    <router-view
      :playlist="room.playlist"
      @moveSong="moveSong"
      @addSong="addSong"
    ></router-view>
    <chat-room :room="room" :class="chatStatus"/>
    <div
      class="toggle-chat-btn flex justify-center align-center"
      @click="toggleChat"
    ><i class='far fa-comment-dots'></i></div>
  </div>
</template>

<script>
import addSong from "@/components/AddSong.vue";
import youtubePlayer from "@/components/YoutubePlayer.vue";
import chatRoom from "@/components/Chat.vue";
import playlistCmp from '@/components/PlaylistCmp.vue'
import userPreview from '@/components/UserPreview.vue'

export default {
  data () {
    return {
      room: null,
      isUserPrev: false,
      adminRoom: null,
      isAdmin: false,
      isLiked: false,
      isChatOpen: false
    };
  },
  methods: {
    updatePlaylist (playlist) {
      this.room.playlist = playlist
      this.$socket.emit('updatePlaylist', this.room._id, playlist)
    },
    addSong (song) {
      this.room.playlist.push(song)
      var playlist = this.room.playlist
      this.$socket.emit('modifyPlaylist', this.room._id, playlist)

    },
    moveSong (playlist) {
      this.room.playlist = playlist
      this.$socket.emit('modifyPlaylist', this.room._id, playlist)
    },
    toggleLike () {
      if (!this.getUser) return
      this.isLiked = !this.isLiked
      this.$socket.emit('updateLiked', this.room, this.getUser)
    },
    toggleChat () {
     this.isChatOpen = !this.isChatOpen
    }
  },
  created () {
    const roomId = this.$route.params.roomId;
    this.$socket.emit('getRoomById', roomId)
    this.$socket.emit('getPlaylist')

  },
  computed: {
    getUser () {
      return this.$store.getters.getCurrUser
    },
    userLiked () {
      if (this.isLiked) return 'unlike'
    },
    chatStatus(){
      if(this.isChatOpen) return 'show-chat'
    }
  },
  sockets: {
    setRoom: function (room) {
      this.room = room
      this.$socket.emit('getUserById', this.room.admin)
    },
    loadPlaylist (playlist) {
      this.room.playlist = playlist
    },
    setUserProfile: function (user) {
      this.adminRoom = user[0]
      this.isAdmin = true
    }
  },
  watch: {
    '$route.params.roomId': function (id) {
      this.$socket.emit('getRoomById', id)
      this.$socket.emit('getPlaylist')
    }
  },
  components: {
    addSong,
    youtubePlayer,
    chatRoom,
    playlistCmp,
    userPreview
  }
};
</script>

