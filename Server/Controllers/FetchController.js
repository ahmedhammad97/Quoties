const Quote = require('../Database/models/Quote')
const User = require('../Database/models/User')


module.exports = {

  fetchSearch(req, res){
    Quote.find({body : new RegExp(req.body.searchRegex, 'gi')}).limit(20).then(results=>{
      let resultArray = generateQuotesArray(results, req.body.id);
      res.send(resultArray);

    }).catch(err=>{console.log(err);})
  },

  fetchProfile(req, res){
    Quote.find({username : req.body.username}).limit(50).then(response=>{

      let resultArray = generateQuotesArray(response, req.body.id);

      //response
      res.send(resultArray);

    }).catch(err=>{console.log(err);})
  },

  fetchTrending(req, res){
    Quote.find({}).limit(10).sort({likes : -1}).then(result=>{
      let resultArray = generateQuotesArray(result, req.body.id);

      //response
      res.send(resultArray);
    })
  }

}

var isLiked = function(id, record){
  let tempArr = record.likedUsers.filter(val=>{
    return val === id;
  })
  return tempArr.length !== 0;
}

var generateQuotesArray = function(results, id){
  let arr = [];
  results.forEach((record)=>{
    arr.push({
      body : record.body,
      likes : record.likes,
      author : record.author,
      username : record.username,
      isLiked : isLiked(id, record),
      quoteId : record._id
    })
  })

  return arr;
}
