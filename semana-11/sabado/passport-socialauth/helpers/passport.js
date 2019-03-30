const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/User");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(profile);
      User.findOne({ facebookId: profile.id })
        .then(user => {
          if (user) {
            return cb(null, user);
          }

          let { id, displayName } = profile;

          User.create({ facebookId: id, displayName })
            .then(newUser => {
              return cb(null, newUser);
            })
            .catch(err => {
              cb(err);
            });
        })
        .catch(err => {
          cb(err);
        });
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then(user => {
      cb(null, user);
    })
    .catch(err => {
      cb(err);
    });
});

module.exports = passport;
