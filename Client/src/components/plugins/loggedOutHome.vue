<template>
  <div id="homeOut">
    <span class="quote" id="quote1"><font-awesome-icon icon="quote-left" /> Whatever you do, do it well <font-awesome-icon icon="quote-right" /></span>
    <span class="quote" id="quote2"><font-awesome-icon icon="quote-left" /> Everything happens for a reason <font-awesome-icon icon="quote-right" /></span>

    <center>
    <h1>Turn your Ahaa moment <font-awesome-icon icon="lightbulb" />, into history record.</h1>
    <br />
    <form v-on:submit="search">
      <input type="text" name="" placeholder="Search for quotes..." v-model="searchTerm">
    </form>
    </center>

    <span class="quote" id="quote3"><font-awesome-icon icon="quote-left" /> Live each day as if it's your last <font-awesome-icon icon="quote-right" /></span>
    <span class="quote" id="quote4"><font-awesome-icon icon="quote-left" /> Every moment is a fresh beginning <font-awesome-icon icon="quote-right" /></span>
  </div>
</template>

<script>


export default {
  name: 'loggedOutHome',
  data(){
    return{
      searchTerm : ""
    }
  },
  methods: {
    search(){
      this.$router.push({ path: `/search/${this.searchTerm}` })
    }
  }
}
</script>

<style>
  #homeOut{
    margin-top: 200px;
  }

  input{
    width: 40%;
    border-radius: 25px;
    border: 0;
    padding: 10px;
    text-align: center;
    font-size: 20px;
  }

  .quote{
    font-size: 25px;
    position: absolute;
    color: #777;
    opacity: 0.5;
  }

  #quote1{
    top: 150px;
    margin-left: 70px;
    transform: rotate(-5deg);
  }
  #quote2{
    transform: rotate(20deg);
    right: 25px;
    top : 150px;
  }
  #quote3{
    margin-top: 60px;
    margin-left: 130px;
    transform: rotate(10deg);

  }
  #quote4{
    right: 200px;
    margin-top: 100px;
    transform: rotate(-10deg);
  }

</style>
