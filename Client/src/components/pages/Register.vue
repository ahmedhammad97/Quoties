<template>
  <div class="register">
    <form v-on:submit="register">
      <center>
      <input type="text" name="fullname" placeholder="Full Name" v-model="fullname" required><br /><br />
      <input type="text" name="username" placeholder="Username" v-model="username" required><br /><br />
      <input type="email" name="email" placeholder="Email" v-model="email" required><br /><br />
      <input type="password" name="password" placeholder="Password" v-model="password" required><br /><br /><br />
      <button type="submit" name="button">Register</button>
    </center>
    </form>

    <socialAuth></socialAuth>
    <cookiesAlert></cookiesAlert>
  </div>
</template>

<script>
import cookiesAlert from '../plugins/cookies.vue'
import socialAuth from '../plugins/socials.vue'
import authApi from '../../services/Auth'

export default {
  name: 'login',
  components : {
    cookiesAlert,
    socialAuth
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
      authApi.register(this.username, this.password, this.email, this.fullname)
      .then(response=>{
        if(response.data.valid){
          this.$store.commit('login');
          this.$store.commit('userdata',{
            username : this.username,
            fullname : this.fullname,
            email : this.email
          });
          this.$router.push({path: '/'});
        }else{
          alert(response.data.message);
        }
      })
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
</style>
