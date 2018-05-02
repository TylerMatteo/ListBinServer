const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

const app = express();
// tell the app to look for static files in these directories
// app.use(express.static('./server/static/'));
// app.use(express.static('./client/dist/'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

passport.use(new TwitterStrategy({
    consumerKey: '2rDXPNyy7MWZaiSZX0jjmIFGe',
    consumerSecret: 'q138oEcJuvEj7UuJPLX0Iol7YdOJmnxVimUikvKA1yrpGNY8s9',
    callbackURL: "http://www.example.com/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

// start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});