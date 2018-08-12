<template>
  <div class="trending">
      <center><h2>Trending quotes right now...</h2></center><br /><br />
    <ul>
      <li v-for="quote in quotes">
        <quote v-bind="quote"></quote><br />
      </li>
    </ul>
  </div>
</template>

<script>
import trendingApi from "../../services/grapQuotes"
import quote from "../plugins/quote.vue"

export default {
  name: 'trending',
  components: {
    quote
  },
  data(){
    return{
      quotes : []
    }
  },
  methods : {
    getPosts(){
      trendingApi.trending().then(response=>{
        quotes = response.data;
      }).catch(err=>{ console.log(err); })
    }
  },
  created(){
    this.getPosts()
  }

}
</script>

<style scoped>
  .trending{
    margin-top: 100px;
    color: white;
    margin-bottom: 100px;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    margin: 0 auto;
  }
</style>
