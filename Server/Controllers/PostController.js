const Quote = require('../Database/models/Quote')
const User = require('../Database/models/User')

module.exports = {

  postQuote(req, res){
    let tempQuote = new Quote({
      body: req.body.quoteBody,
      likes : 0,
      author : req.body.fullname,
      username : req.body.username,
      likedUsers : []
    });

    tempQuote.save(err=>{
      if(err){
        console.log(err);
        res.send({valid : false, message : "Internal error happened, cannot post"});
      }else{
        User.findOne({username : req.body.username}).then(result=>{
          result.quotesId.push(tempQuote._id);
          result.save();
        })

        //Send valid response
        res.send({valid : true});
      }
    });


  }

}
