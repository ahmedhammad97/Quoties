const router = require('express').Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const authController = require('../Controllers/AuthController');
const postController = require('../Controllers/PostController');
const fetchController = require('../Controllers/FetchController');
const editController = require('../Controllers/EditController');

//BodyParser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/login', jsonParser, authController.loginController)

router.post('/register', jsonParser, authController.registerController)

router.post('/refresh', jsonParser, authController.refreshController)

router.post('/postQuote', jsonParser, postController.postQuote)

router.post('/search', jsonParser, fetchController.fetchSearch)

router.post('/trending', jsonParser, fetchController.fetchTrending)

router.post('/profile', jsonParser, fetchController.fetchProfile)

router.post('/like', jsonParser, editController.likeController)

router.delete('/deleteQuote/:quoteId', urlencodedParser, editController.deleteController)

router.get('/auth/google', passport.authenticate('google', { scope : ['profile'] }));

router.get('/auth/facebook', passport.authenticate('facebook', { scope : ['read_stream'] }));

router.get('/auth/google/redirect', passport.authenticate('google'), authController.googleController)

router.get('/auth/facebook/redirect', passport.authenticate('facebook'), authController.facebookController)


module.exports = router;
