<template>
  <section class="user-preview">
    <div v-if="user">
      <i v-if="isFollow" @click="followUser" class="fas fa-user-slash icon-user-prev"></i>
      <i v-else @click="followUser" class="fas fa-user-plus icon-user-prev"></i>
      <i @click="goToUserProfile" class="fas fa-info-circle icon-user-prev"></i>
      <i class="fas fa-comments icon-user-prev"></i>
    </div>
  </section>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
    }
  },
  methods: {
    goToUserProfile() {
      this.$router.push('/profile/' + this.user._id)
    },
    followUser() {
      if (this.getUser.name === 'guest') return
      else {
        this.$socket.emit('followUser', { follower: this.user, following: this.getUser })
      }
    }
  },
  created() {

  },
  computed: {
    getUser() {
      var currUser = this.$store.getters.getCurrUser
      if (currUser) return currUser
      else return { name: 'guest' }
    },
    isFollow() {
      if(this.getUser.name === 'guest') return
      var idx = this.getUser.followersIds.findIndex(currFollowerId => {
        return currFollowerId === this.user._id
      })
      if (idx !== -1) return true
      else return false
    }
  }
}
</script>

<style>
</style>
