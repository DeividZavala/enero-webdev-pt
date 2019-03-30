const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("auth-form", { login: true });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/private",
    failureRedirect: "/auth/login",
    failureFlash: "Email o contraseña invalidos"
  }),
  (req, res) => {}
);

router.get("/register", (req, res) => {
  res.render("auth-form");
});

router.post("/register", (req, res) => {
  let { password, email, passwordConfirm } = req.body;

  if (password !== passwordConfirm)
    return res.render("auth-form", {
      err: "Las contras no son las mismas perro"
    });

  User.register({ email }, password).then(user => {
    res.redirect("/auth/login");
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
