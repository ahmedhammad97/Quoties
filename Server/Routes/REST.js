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

router.post('/postQuote', jsonParser, authController.verifyCookie, postController.postQuote)

router.post('/search', jsonParser, fetchController.fetchSearch)

router.post('/trending', jsonParser, fetchController.fetchTrending)

router.post('/profile', jsonParser, authController.verifyCookie, fetchController.fetchProfile)

router.post('/like', jsonParser, authController.verifyCookie, editController.likeController)

router.delete('/deleteQuote/:quoteId', urlencodedParser, authController.verifyCookie, editController.deleteController)

router.get('/auth/google', passport.authenticate('google', { scope : ['profile'] }));

router.get('/auth/facebook', passport.authenticate('facebook', { scope : ['read_stream'] }));

router.get('/auth/google/redirect', passport.authenticate('google'), authController.googleController)

router.get('/auth/facebook/redirect', passport.authenticate('facebook'), authController.facebookController)


module.exports = router;
