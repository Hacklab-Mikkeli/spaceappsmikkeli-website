var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../model/user');
var auth = require('./auth');

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(new GoogleStrategy({    
    clientID : auth.google.clientid,
    clientSecret : auth.google.secret,
    callbackURL : auth.google.callbackURL,
  }, function (token, refreshToken, profile, done) {
    process.nextTick(function () {
      
      User.findOne({ 'email' : profile.emails[0].value }, function (err, user) {
        if (err)
          return done(err); 
        if (user) {
          return done(null, user);
        } else {
          return done('not found!');
        }
      });
    });

  }));

};
