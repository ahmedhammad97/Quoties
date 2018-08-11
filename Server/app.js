const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport');
const passportSetup = require('./Services/OAuth');
const routes = require('./Routes/REST')

//Main app
const app = express()


//Cors Api allows front-end port to hit this server
app.use(cors())


//Setting server port
app.listen(process.env.PORT || 8081, ()=>{
  console.log("Listening to port 8081 .. Watch your mouth there.");
});


//REST Apis
app.use(routes)


// initialize passport
app.use(passport.initialize());
app.use(passport.session());


//Cookies
app.use(cookieSession({
  name: 'session',
  keys: [keys.cookies.encryptionKey],

  // Cookie Options
  maxAge: 5 * 60 * 1000 // 5 mins.
}))
