<template>
  <div class="cookie" v-if="open">
    <p>It seems like your browser is hungry, by using our website, you allow us to feed it some cookies <i class="fas fa-cookie-bite"></i></p>
    <button v-on:click="close">x</button>
  </div>
</template>

<script>

export default {
  name: 'cookie',
  computed : {
    open(){
      return this.$store.state.cookiesAlert
    }
  },
  methods: {
    close(){
      this.$store.commit('hideCookiesAlert')
    }
  }
}
</script>

<style scoped>
  .cookie{
    position: fixed;
    bottom: 0;
    width: 100%;
    opacity: 0.9;
    text-align: center;
    padding: 20px;
    color: white;
    background-color: #FF8800;
    font-size: 18px;
    z-index: 1200;
    font-weight: bold;
  }
  button{
    position: absolute;
    right: 15px;
    top: 0px;
    background-color: transparent;
    border: 0;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    color: white;
    text-align: center;
  }
</style>
