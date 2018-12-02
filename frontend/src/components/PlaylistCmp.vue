<template>
    <div>
        <ul class="search-res">
            <li class="song-item space-between" v-for="song in playlistToShow" :key="song.id">
                <div class="playlist-controls flex flex-column">
                    <button class="playlist-up-arrow" @click="moveSong('up', song)"><i class="fas fa-arrow-circle-up"></i></button>
                    <button class="playlist-down-arrow" @click="moveSong('down', song)"><i class="fas fa-arrow-circle-down"></i></button>
                </div>
                <div class="playlist-video-details">
                    <img class="youtube-img" :src="song.img"/>
                    <h3 class="youtube-title">{{song.title}}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['playlist'],
    data() {
        return {
            newPlaylist: []
        }
    },
    computed: {
        playlistToShow() {
            return this.playlist.slice(1)
        }
    },
    methods: {
        moveSong(direction, song) {
            //debugger;
            var songIdx = this.playlist.findIndex(playlistSong => {
                return song.id === playlistSong.id
            })
            let newIndex = null; 
            if (direction === 'up'){
                if (songIdx === 1) return;
                console.log("going up");
                newIndex = songIdx - 1
            } else {
                if (songIdx === this.playlist.length - 1) return;
                console.log("going down");
                newIndex = songIdx + 1;
            }
            console.log("Swapping ", songIdx, newIndex)
            let temp = this.playlist[songIdx]
            this.playlist[songIdx] = this.playlist[newIndex]
            this.playlist[newIndex] = temp
            this.newPlaylist = this.playlist.slice()
            this.$emit('moveSong', this.newPlaylist)
        }
    }
}
</script>

<style lang="scss" scoped>

button {
    background-color: transparent;
    border: 0;
}
.playlist-video-details {
    display: flex;
    align-items: center;
}

.fas {
    color: #99cc00;
    font-size: 1.4rem;
    cursor: pointer;
    background-color: transparent;
}

</style>