const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const mailer = require("../helpers/mailer");

router.get("/login", (req, res) => {
  res.render("auth-form", { action: "Login" });
});

router.get("/register", (req, res) => {
  res.render("auth-form");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/auth/login",
    failWithError: true
  })
);

router.post("/register", (req, res) => {
  const { password } = req.body;
  console.log(req.body);

  User.register(req.body, password)
    .then(user => {
      const { email } = user;
      const options = {
        email,
        subject: "Verifica tu mail",
        message: "Bienvenido morro, por fa verifica tu mail"
      };

      mailer.send(options);
      res.redirect("/auth/login");
    })
    .catch(err => {
      res.render("auth-form", { err, action: "Register" });
    });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// facebook auth

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    successRedirect: "/profile"
  })
);

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
