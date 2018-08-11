const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
const passportSetup = require('./Services/OAuth')
const routes = require('./Routes/REST')
const dbConnection = require(__dirname + '/Database/dbConnect')
const keys = require('./Services/keys.js')

//Main app
const app = express()


//Cors Api allows front-end port to hit this server
app.use(cors())


//Setting server port
app.listen(process.env.PORT || 8081, ()=>{
  console.log("Listening to port 8081 .. Watch your mouth there.");
});


//Databse Connection
dbConnection();


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
  maxAge: 60 * 60 * 1000 // 1 hour
}))
