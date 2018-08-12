<template>
  <div class="searchPage">
      <center><h2>Search results for <i>{{this.$route.params.term}}</i></h2></center><br /><br />
      <div id="noResults" v-if="empty">
        <center>
          <h4>Sorry, no quotes available for this term :(</h4>
        </center>
      </div>
    <ul>
      <li v-for="quote in quotes">
        <quote v-bind="quote"></quote><br />
      </li>
    </ul>
  </div>
</template>

<script>
import grapQuotesApi from "../../services/grapQuotes"
import quote from "../plugins/quote.vue"

export default {
  name: 'search',
  components: {
    quote
  },
  data(){
    return{
      quotes : [],
      empty : false
    }
  },
  methods : {
    doSearch(){
      grapQuotesApi.search(this.$route.params.term).then(response=>{
        //Display response
        this.quotes = response.data;
        if(response.data.length === 0){this.empty = true;}
      }).catch(err=>{ console.log(err); })
    }
  },
  created(){
    this.doSearch()
  }

}
</script>

<style scoped>
  .searchPage{
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
