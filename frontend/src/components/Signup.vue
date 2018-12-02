<template>
<<<<<<< HEAD
  <section>
    <h2>Signup</h2>
    <form @submit.prevent="signupUser">
      <input
        placeholder="User Name"
        v-model="newUser.name"
        type="text"
      >
      <input
        placeholder="Password"
        v-model="newUser.pass"
        type="password"
      >
      <button>Signup</button>
    </form>
  </section>
=======
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
>>>>>>> e93acd5d4956f4d999c658556e43ea9ec9f20368

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
