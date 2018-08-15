<template>
  <div class="searchPage">
      <center><h2>Search results for <i>{{term}}</i></h2></center><br /><br />
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

  computed : {
    term(){
      return this.$route.params.term;
    }
  },

  watch : {
    term : function (x,y){
      this.doSearch()
    }
  },

  methods : {
    convertToRegex(term){
      let arr = term.trim().split(" ");
      let regex = "";
      arr.forEach(word=>{
        regex = regex.concat("|", word)
      })
      return regex.substr(1);
    },

    doSearch(){
      grapQuotesApi.search(this.$store.state.id, this.convertToRegex(this.$route.params.term)).then(response=>{
        this.quotes = response.data;
        if(response.data.length === 0){this.empty = true;}
      }).catch(err=>{ console.log(err); })
    }
  },

  beforeMount(){
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
