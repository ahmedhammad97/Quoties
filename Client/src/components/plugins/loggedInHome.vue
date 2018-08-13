<template>
  <div class="inHome">
    <center>
      <h4>There are moments, when you finally conclude a tough experience, or understand a life concept.<br />
      Make sure you record them for later!</h4>
    </center>
    <br /><br />
    <form v-on:submit="postQuote">
      <i class="fas fa-quote-left"></i>
      <textarea name="name" v-model="quote"></textarea>
      <i class="fas fa-quote-right"></i><br /><br />
      <button type="submit" name="button">Post</button>
      <span>Characters left : {{charsLeft}}</span>
    </form>
  </div>
</template>

<script>
import postQuoteApi from '../../services/postQuote'

export default {
  name: 'loggedInHome',
  data(){
    return{
      quote : ""
    }
  },
  computed : {
    charsLeft(){
      return 200 - this.quote.length;
    }
  },
  methods : {
    postQuote : function(evt){
      evt.preventDefault();
      if(this.charsLeft<0){
        alert("Characters limit exceeded!");
      }else{
        //Send to server
        postQuoteApi.postQuote(this.quote, this.$store.state.username, this.$store.state.fullname).then(response=>{
          if(response.data.valid){
            alert('Posted Successfully');
          }else{
            alert(response.data.message);
          }
        }).catch(err=>{ console.log(err); })

        this.quote = "";
      }
    }
  }
}
</script>

<style scoped>
  .inHome{
    margin-top: 120px;
  }
  form{
    width: 90%;
    margin-left: 5%;
    position: relative;
  }
  textarea{
    width: 84%;
    height: 250px;
    padding: 30px;
    font-size: 25px;
    margin-left: 8%;
    border-radius: 10px;
    resize: none;
  }
  button{
    width: 20%;
    background-color: #00C851;
    padding: 5px;
    border: 0;
    border-radius: 8px;
    color: white;
    font-size: 25px;
    text-align: center;
    cursor: pointer;
    margin-left: 8%;
  }
  button:hover{
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  span{
    position: absolute;
    right: 8%;
    font-weight: bold;
  }
  .fa-quote-left{
    position: absolute;
    font-size: 40px;
  }
  .fa-quote-right{
    position: absolute;
    right: 0;
    bottom: 70px;
    font-size: 40px;
  }
</style>
