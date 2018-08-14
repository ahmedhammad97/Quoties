<template>
  <div id="homeOut">
    <span class="quote" id="quote1"><i class="fas fa-quote-left"></i> Whatever you do, do it well <i class="fas fa-quote-right"></i></span>
    <span class="quote" id="quote2"><i class="fas fa-quote-left"></i> Everything happens for a reason <i class="fas fa-quote-right"></i></span>

    <center>
    <h1>Turn your Ahaa moment <i class="fas fa-lightbulb"></i>, into history record.</h1>
    <br />
    <form v-on:submit="search">
      <input type="text" name="" placeholder="Search for quotes..." v-model="searchTerm">
    </form>
    </center>

    <span class="quote" id="quote3"><i class="fas fa-quote-left"></i> Live each day as if it's your last <i class="fas fa-quote-right"></i></span>
    <span class="quote" id="quote4"><i class="fas fa-quote-left"></i> Every moment is a fresh beginning <i class="fas fa-quote-right"></i></span>
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
      if(this.searchTerm.trim() == ""){alert("Empty search!"); return;}
      this.$router.push({ path: `/search/${this.searchTerm}` });
      this.searchTerm = "";
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
    color: white;
    opacity: 0.2;
    font-weight: bold;
    font-style: italic;
  }

  #quote1{
    top: -70px;
    margin-left: 70px;
    transform: rotate(-5deg);
  }
  #quote2{
    transform: rotate(20deg);
    right: 25px;
    top : -40px;
  }
  #quote3{
    margin-top: 60px;
    margin-left: 130px;
    transform: rotate(10deg);

  }
  #quote4{
    right: 200px;
    margin-top: 150px;
    transform: rotate(-10deg);
  }

</style>
