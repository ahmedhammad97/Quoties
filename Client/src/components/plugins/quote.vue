<template>
  <div class="quote" v-show="!deleted">
      <i class="fas fa-quote-left"></i>&nbsp&nbsp
          <span>{{body}}</span>
       &nbsp&nbsp<i class="fas fa-quote-right"></i><br /><br />

       <span class="toolbar">
         {{likesCount}} <i class="fas fa-heart" title="like" v-if="this.$store.state.loggedIn" v-bind:style="{color : likeColor}" v-on:click="like">&nbsp&nbsp</i>
         <i class="fas fa-trash" title="remove" v-if="owner" v-on:click="remove">&nbsp&nbsp</i>
         <i class="fas fa-copy" title="copy" v-on:click="copy"></i>
       </span>

       <em>{{author}}</em><br />
  </div>
</template>

<script>
import editQuoteApi from "../../services/editQuotes"

export default {
  name: 'quote',

  props : {
    body : String,
    likes : Number,
    author : String,
    username : String,
    isLiked : Boolean,
    quoteId : String
  },

  data(){
    return{
      deleted : false,
      dataLikes : this.likes,
      dataisLiked : this.isLiked
    }
  },

  computed: {
    owner(){
      return this.$store.state.username == this.username;
    },
    likesCount: {
      get(){return this.dataLikes;},
      set(val){this.dataLikes = this.likes+1;}
    },
    likeColor: {
      get(){return this.dataisLiked?"red":"white";},
      set(val){this.dataisLiked = true;}
    }
  },
  methods : {
    like(){
      if(!this.isLiked){
        editQuoteApi.likeQuote(this.$store.state.id, this.quoteId).then(response=>{
          if(response.error){alert("Like failed.. Sorry");}
          this.likesCount = 1;
          this.likeColor = "red";

        }).catch(err=>{ console.log(err); })
      }
    },
    remove(){
      //May add Prompt first
      editQuoteApi.deleteQuote(this.quoteId).then(response=>{
        this.deleted = true;
      }).catch(err=>{ console.log(err); })
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
    overflow-wrap: break-word;
    word-wrap: break-word;
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
