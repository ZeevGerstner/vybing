<template>
    <div>
        <ul class="search-res">
            <li class="song-item space-between" v-for="song in playlist" :key="song.id">
                <div class="playlist-controls flex flex-column">
                    <button class="playlist-up-arrow"><i class="fas fa-arrow-circle-up"></i></button>
                    <button class="playlist-down-arrow"><i class="fas fa-arrow-circle-down"></i></button>
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
    props: ['playlist']
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