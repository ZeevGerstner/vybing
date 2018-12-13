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
        >
          creator:
          <span
            class="room-creator-hover"
            @click="isUserPrev = !isUserPrev"
          >{{adminRoom.name}}</span>
        </h4>
        <user-preview
          v-show="isUserPrev"
          :user="adminRoom"
        ></user-preview>
      </div>
      <div class="room-details-topbar">
        <div class="room-item-genre">{{room.type}}</div>

        <div class="room-icon">
          <i class="fas fa-eye font-awesome"></i>
          <h4 class="icon-count">{{roomCount}}</h4>
        </div>
        <div
          class="room-icon"
          @click="toggleLike"
        >
          <i
            class="fas fa-thumbs-up btn-room-like"
            :class="(!userLiked) ? '' : 'unlike'"
          ></i>
          <h4 class="icon-count">{{roomLikes}}</h4>
        </div>
      </div>
    </nav>

    <div class="room-player">
      <youtube-player
        :playlist="room.playlist"
        @updatePlaylist="updatePlaylist"
      >
        <button
          @click="shuffle"
          class="btn-shuffle"
        ><i class="fas fa-random"></i></button>
      </youtube-player>
    </div>
    <router-view
      :playlist="room.playlist"
      @moveSong="moveSong"
      @addSong="addSong"
    ></router-view>
    <chat-room
      @newMsg="notifications++"
      :room="room"
      :class="chatStatus"
    />
    <div
      v-if="!isChatOpen"
      class="open-chat-btn flex justify-center align-center"
      @click="toggleChat"
    >
      <h2
        v-show="notifications > 0"
        class="notifications"
      >{{notifications}}</h2>

      <i class="fas fa-comments"></i>
    </div>

    <div
      v-else
      class="close-chat-btn"
      @click.stop="toggleChat"
    >
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
import { shuffle } from 'lodash'

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
      isChatOpen: false,
      roomLikes: 0,
      roomCount: 0,
      notifications: 0,
    };
  },
  methods: {
    updatePlaylist (playlist) {
      this.room.playlist = playlist
      this.$socket.emit('updatePlaylist', this.room._id, playlist)
    },
    addSong (song) {
      if (this.getUser._id) song.addedBy = this.getUser._id
      else song.addedBy = this.getUser.name
      this.room.playlist.push(song)
      var playlist = this.room.playlist
      this.$socket.emit('modifyPlaylist', this.room._id, playlist)

    },
    moveSong (playlist) {
      this.room.playlist = playlist
      this.$socket.emit('modifyPlaylist', this.room._id, playlist)
    },
    toggleLike () {
      if (this.getUser.name === 'guest') return
      this.$socket.emit('updateLiked', { room: this.room, user: this.getUser })
    },
    toggleChat () {
      this.isChatOpen = !this.isChatOpen
      this.notifications = 0
    },
    shuffle () {
      this.room.playlist = [this.room.playlist[0], ...shuffle(this.room.playlist.slice(1))]
      this.$emit('moveSong', this.room.playlist)
    }
  },
  created () {
    const roomId = this.$route.params.roomId;
    this.$socket.emit('getRoomById', roomId)
    this.$socket.emit('getPlaylist')
  },
  computed: {
    getUser () {
      var currUser = this.$store.getters.getCurrUser
      if (currUser) return currUser
      else return { name: 'guest' }
    },
    userLiked() {
      if(this.getUser.name === 'guest') return
      return this.getUser.roomsLikedIds.find(currId =>{
        return currId === this.room._id
      })
    },
    chatStatus () {
      if (this.isChatOpen) return 'show-chat'
    },
    chatIsOpen () {
      if (this.isChatOpen) return 'hide'
    },

  },
  sockets: {
    setRoom (room) {
      this.room = room
      this.$socket.emit('chatRoomJoined', room)
      this.roomLikes = this.room.userLikedIds.length
      this.$socket.emit('getUserById', this.room.admin)

    },
    loadPlaylist (playlist) {
      this.room.playlist = playlist
    },
    setUserProfile (user) {
      this.adminRoom = user[0]
      this.isAdmin = true
    },
    updateUser (currUser) {
      this.$store.commit({ type: 'setCurrUser', currUser })
      localStorage.setItem('currUser', JSON.stringify(currUser));
    },
    updateRoomCount (count) {
      this.roomCount = count
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
  },
  destroyed () {
    this.$socket.emit('roomClose')
  }
};
</script>

<style lang="scss" scoped>
.room-player {
  position: relative;
}
</style>
