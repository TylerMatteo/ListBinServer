import passport from 'passport'
import { Strategy } as TwitterStrategy from 'passport-twitter'

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

export default passport
