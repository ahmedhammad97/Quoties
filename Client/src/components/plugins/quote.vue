<template>
  <div class="quote">
      <i class="fas fa-quote-left"></i>&nbsp&nbsp
          <span>{{body}}</span>
       &nbsp&nbsp<i class="fas fa-quote-right"></i><br /><br />

       <span class="toolbar">
         {{likes}} <i class="fas fa-heart" title="like" v-bind:style="{color : likeColor}" v-on:click="like">&nbsp&nbsp</i>
         <i class="fas fa-trash" title="remove" v-if="owner" v-on:click="remove">&nbsp&nbsp</i>
         <i class="fas fa-copy" title="copy" v-on:click="copy"></i>
       </span>

       <em>{{author}}</em><br />
  </div>
</template>

<script>

export default {
  name: 'quote',
  props : {
    body : String,
    likes : Number,
    author : String,
    username : String,
    isLiked : Boolean
  },
  data(){
    return{
      liked : this.isLiked
    }
  },
  computed: {
    owner(){
      return this.$store.state.username == this.username;
    },
    likeColor(){
      return this.liked?"red":"white";
    }
  },
  methods : {
    like(){
      if(!this.liked){
      //request an addition to the server
      this.likes++;

      //recolor
      this.likeColor = "red";

      this.liked = true;
      }
    },
    remove(){

    },
    copy(){
      this.$copyText(this.body).then(function (e) {
        alert('Copied')
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
  .quote{
    width: 80%;
    margin-left: 10%;
    background-color: #272727;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 1px black;
    position: relative;
    opacity: 0.99;
  }
  .fa-quote-right{
    text-align: right;
  }
  span{
    font-size: 20px;
  }
  em{
    float: right;
    padding-right: 20px;
    font-size: 15px;
  }
  i{
    cursor: pointer;
  }
  .toolbar{
    font-size: 18px;
  }
</style>
