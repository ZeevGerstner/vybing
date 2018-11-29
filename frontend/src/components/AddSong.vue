<template>
  <div class="add-song">
 
    <input class="add-song-input" v-model="search.txt" type="text" placeholder="search song" @input="searchSong">
   
    <ul class="search-res">
      <song-preview v-for="song in songs" :key="song.id" :song="song" />  
      {{songs}}
    </ul>
    
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
      console.log(this.search.txt)
      this.$store.dispatch("searchSong", this.search.txt);
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
