<template>
    <div class="socials">
      <center>
        <button v-on:click="googleRegister" id="google"><i class="fab fa-google-plus-g"></i> &nbsp&nbspRegister with Google+</button><br /><br /><br />
        <button v-on:click="facebookRegister" id="facebook"><i class="fab fa-facebook-f"></i> &nbsp&nbspRegister with Facebook</button>
      </center>
    </div>
</template>

<script>

export default {
  name: 'socials',
  methods: {
    googleRegister(){

    },
    facebookRegister(){

    }
  }
}
</script>

<style scoped>

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
    margin-top: 150px;
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
