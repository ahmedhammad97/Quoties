const Quote = require('../Database/models/Quote')
const User = require('../Database/models/User')


module.exports = {

  fetchSearch(req, res){
    let reg = new RegExp(req.body.searchRegex, 'gim');

    Quote.find({$or:[{body: reg},{author: reg}]}).limit(20).sort({likes : -1}).then(results=>{
      let resultArray = generateQuotesArray(results, req.body.id);

      res.send(resultArray);

    }).catch(err=>{console.log(err);})
  },

  fetchProfile(req, res){
    Quote.find({username : req.body.visitorUsename}).limit(50).sort({likes : -1}).then(response=>{

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
