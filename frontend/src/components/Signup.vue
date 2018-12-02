<template>
    <section class="signup container">
        <div class="signup-container">
            <h2 class="category-title">Signup</h2>
            <form class="signup-form" @submit.prevent="signupUser">
                <input class="signup-input" placeholder="User Name" v-model="newUser.name" type="text">
                <input class="signup-input" placeholder="Password" v-model="newUser.pass" type="password">
                <button class="signup-btn">Signup</button>
            </form>
        </div>
        <img class="signup-img" src="../assets/imgs/signup-img.jpg">
    </section>

</template>

<script>
export default {
  data () {
    return {
      newUser: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    signupUser () {
      console.log(this.newUser)
      this.newUser = { name: '', pass: '' }
    }
  }

}
</script>

<style>
</style>
