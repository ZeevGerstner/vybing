<template>
  <div class="playlist-wrapper">
    <div class="add-song-search-container">
      <input
        class="add-song-input"
        ref="searchInput"
        v-model="search.txt"
        type="text"
        placeholder="search song"
        @input="searchSong"
      >
      <div class="btn-search-close" @click.stop="closeSearch">
        <i class="fas fa-times fa-2x"></i>
      </div>
    </div>
    <ul class="search-res" v-if="songs.length">
      <song-preview v-for="song in songs" :key="song.id" :song="song" @addSong="addSong"/>
    </ul>
    <div id="search-img-wrapper" v-else>
      <img src="https://res.cloudinary.com/da2l5r1cy/image/upload/v1543854878/kids-search-robot.png">
    </div>
  </div>
</template>

<script>
import songPreview from "./SongPreview.vue";
export default {
  name: 'addSong',
  data() {
    return {
      search: {
        txt: ""
      }
    };
  },
  methods: {
    searchSong() {
      this.$store.dispatch('searchSong', this.search.txt);
    },
    addSong(song) {
      this.$emit('addSong', song);
    },
    closeSearch() {
      this.$router.go(-1);
    }
  },
  computed: {
    songs() {
      return this.$store.getters.searchRes;
    }
  },
  components: {
    songPreview
  },
  mounted() {
    this.$refs.searchInput.focus();
  }
};
</script>

<style scoped lang="scss">
.add-song-search-container {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 15px;
}

.btn-search-close {
  color: #99cc00;
  cursor: pointer;
}

img {
  height: 100px;
}

#search-img-wrapper {
  overflow: hidden;
  text-align: center;
}
</style>
