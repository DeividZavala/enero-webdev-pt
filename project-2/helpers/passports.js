const passport = require("passport");
const User = require("../models/User");
const FacebookStrategy = require("passport-facebook");

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// estrategia de facebook

function facebookCallback(accessToken, refreshToken, profile, cb) {
  User.findOne({ facebookId: profile.id }).then(user => {
    if (user) {
      return cb(null, user);
    }

    const { id: facebookId, displayName } = profile;
    let { email } = profile;
    email = "David.Zavala@localhost.com";
    // si llega un email que ya tenemos en la base de datos entonces el usuario
    // ya se registró y solo tenemos que actualizarlo para no generar 2 perfiles
    // de la misma persona
    User.findOneAndUpdate(
      { email, facebookId: { $exists: false } },
      { $set: { facebookId } },
      { new: true }
    )
      .then(user => {
        if (user) {
          return cb(null, user);
        }

        // en el schema tenemos el name y email como propiedades requeridas
        const [name, lastname] = displayName.split(" ");
        email = email ? email : `${name}.${lastname}@localhost.com`;

        User.create({ facebookId, displayName, name, lastname, email }).then(
          newUser => {
            return cb(null, newUser);
          }
        );
      })
      .catch(err => {
        cb(err);
      });
  });
}

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FBAPPID,
      clientSecret: process.env.FBSECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    facebookCallback
  )
);

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    if (!err) done(null, user);
    else done(err, null);
  });
});

module.exports = passport;
