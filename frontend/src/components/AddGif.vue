<template>
  <div class="gif-search-container">
    <input
      type="text"
      v-model="gifSearch"
      @input="getGifs()"
    >
    <gif-preview :gifs="gifs"></gif-preview>
  </div>
</template>

<script>

import GifPreview from './GifPreview.vue';
import gifService from '../services/gif.service.js';
export default {
  data () {
    return {
      gifSearch: '',
      gifs: []
    }
  },
  components: {
    GifPreview
  },
  methods: {
    getGifs () {
      gifService.getGifs()
        .then(gifs => this.gifs = gifs)
    }
  }
}
</script>

<style>
</style>
