const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const facebookStrategy = require('passport-facebook');
const keys = require('./keys');

passport.serializeUser((name, done) => {
    done(null, name);
});

passport.deserializeUser((name, done) => {
        done(null, name);
});

passport.use(new googleStrategy({
  //options
  callbackURL: '/auth/google/redirect',
  clientID : keys.google.id,
  clientSecret : keys.google.secret
}, (access, refresh, profile, done)=>{
  //callback function
  console.log(profile.displayName);
  done(null, profile.displayName);
  })
)

passport.use(new facebookStrategy({
    clientID: keys.facebook.id,
    clientSecret: keys.facebook.secret,
    callbackURL: "/auth/facebook/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile.displayName);
      done(null, profile.displayName);
  }
));
