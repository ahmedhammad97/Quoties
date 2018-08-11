const router = require('express').Router();
const bodyParser = require('body-parser');
const passport = require('passport');

//BodyParser
var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', (req, res)=>{

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
