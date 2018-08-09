<template>
  <div class="register">
    <form v-on:submit="register">
      <center>
      <input type="text" name="fullname" placeholder="Full Name" v-model="fullname" required><br /><br />
      <input type="text" name="username" placeholder="Username" v-model="username" required><br /><br />
      <input type="email" name="email" placeholder="Email" v-model="username" required><br /><br />
      <input type="password" name="password" placeholder="Password" v-model="password" required><br /><br /><br />
      <button type="submit" name="button">Register</button>
    </center>
    </form>

    <div class="socials">
      <center>
        <button v-on:click="googleRegister" id="google"><i class="fab fa-google-plus-g"></i> &nbsp&nbspRegister with Google+</button><br /><br /><br />
        <button v-on:click="facebookRegister" id="facebook"><i class="fab fa-facebook-f"></i> &nbsp&nbspRegister with Facebook</button>
      </center>
    </div>
    <cookiesAlert></cookiesAlert>
  </div>
</template>

<script>
import cookiesAlert from '../plugins/cookies.vue'

export default {
  name: 'login',
  components : {
    cookiesAlert
  },
  data () {
    return {
      username: "",
      password: "",
      email : "",
      fullname : ""
    }
  },
  methods: {
    register(evn){
      evn.preventDefault()
    },
    googleRegister(){

    },
    facebookRegister(){

    }
  }
}
</script>

<style scoped>

  form{
    margin-top: 150px;
    width: 50%;
    padding: 30px;
    position: absolute;
    border-right: 3px outset #757575;
  }
  input{
    text-align: center;
    border-radius: 25px;
    border: 0;
    width: 70%;
    font-size: 20px;
    height: 50px;
  }
  button{
    width : 70%;
    height: 50px;
    border-radius: 25px;
    border: 0;
    cursor: pointer;
    font-size: 18px;
    background-color: #4CAF50;
    font-weight: bold;
  }
  button:hover{
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  .socials{
    width: 50%;
    position: absolute;
    margin-left: 50%;
    margin-top: 220px;
    padding: 50px;
  }
  #google{
    background-color: #dd4b39;
    color: white;
  }
  #facebook{
    background-color: #3B5998;
    color: white;
  }
</style>
