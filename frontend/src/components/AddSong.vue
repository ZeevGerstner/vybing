<template>
  <div class="add-song">
 
    <input class="add-song-input" v-model="search.txt" type="text" placeholder="search song" @input="searchSong">
   
    <ul class="search-res">
      <song-preview v-for="song in songs" :key="song.id" :song="song" @addSong="addSong"/>  
    </ul>
    {{songs}}
  </div>
</template>

<script>
import songPreview from './SongPreview.vue'
export default {
  name: "addSong",
  data() {
    return {
      search: {
        txt: ""
      }
    };
  },
  methods: {
    searchSong() {
      this.$store.dispatch("searchSong", this.search.txt);
    },
    addSong(song){
      // console.log(song);
      this.$emit('addSong',song)
    }
  },
  computed: {
    songs() {
      return this.$store.getters.searchRes;
    }
  },
  components:{
    songPreview
  }
};
</script>

<style scoped lang="scss">
 
</style>
