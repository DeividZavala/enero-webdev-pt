const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/login", (req, res) => {
  res.render("auth-form", { action: "Login" });
});

router.get("/register", (req, res) => {
  res.render("auth-form");
});

router.post("/register", (req, res) => {
  const { password } = req.body;

  User.register(req.body, password)
    .then(() => {
      res.redirect("/login");
    })
    .catch(err => {
      res.render("auth-form", { err, action: "Register" });
    });
});

module.exports = router;
