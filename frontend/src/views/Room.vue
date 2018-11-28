<template>
  <div class="room">
    <h1>Hello ROOM</h1>
    <youtube-player></youtube-player>
    <add-song>Add song</add-song>
  </div>
</template>



<script>
'use strict'
import addSong from "@/components/AddSong.vue";
import youtubePlayer from '@/components/youtubePlayer.vue'
import chatRoom from '../components/Chat'

export default {
  data() {
    return {
    }
  },
  methods: {
    
  },
  created() {
    },
  components: {
    addSong,
    youtubePlayer
  }
};
</script>

