const router = require('express').Router();
const bodyParser = require('body-parser');
const passport = require('passport');

//BodyParser
var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.post('/postQuote', jsonParser, (req, res)=>{
  console.log(req.body);
  res.end;
})

router.post('/search', jsonParser, (req, res)=>{
  console.log(req.body.searchTerm);
  res.send([/*Array of quotes objects*/])
})

router.post('/trending', (req, res)=>{
  res.send([])
})

router.post('/profile', jsonParser, (req, res)=>{
  console.log(req.body.username);
  res.send([])
})


// auth with google+
router.get('/auth/google', passport.authenticate('google', {
  scope : ['profile']
}));

// auth with facebook
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope : ['read_stream']
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res)=>{

})

router.get('/auth/facebook/redirect', passport.authenticate('facebook'), (req, res)=>{

})

module.exports = router;
