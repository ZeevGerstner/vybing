<template>
    <section class="signup signup-img container">
        <div class="signup-container">
            <h2 class="category-title">Signup</h2>
            <form class="signup-form" @submit.prevent="signupUser">
                <input class="signup-input" placeholder="User Name" v-model="newUser.name" type="text">
                <input class="signup-input" placeholder="Password" v-model="newUser.password" type="password">
                <button class="signup-btn">Signup</button>
            </form>
        </div>
       
    </section>

</template>

<script>
export default {
  data () {
    return {
      newUser: {
        name: '',
        password: '',
        roomsCreatedIds:[],
        roomsLikedIds:[]
      }
    }
  },
  methods: {
    signupUser () {
      this.$store.dispatch({type: 'signup', newUser: this.newUser})
      this.newUser = { name: '', password: '',roomsCreatedIds:[],roomsLikedIds:[] }
    }
  },
  

}
</script>

<style>
</style>
