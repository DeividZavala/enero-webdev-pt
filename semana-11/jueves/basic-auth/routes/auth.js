const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.get("/signup", (req, res) => {
  res.render("auth-form");
});

router.post("/signup", (req, res) => {
  let { username, password } = req.body;
  if (!password) return res.render("auth-form", { err: "No hay password" });
  const salt = 10;
  const bsalt = bcrypt.genSaltSync(salt);
  password = bcrypt.hashSync(password, bsalt);
  User.create({ username, password })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      //res.render("auth-form", err);
      res.json(err);
    });
});

module.exports = router;
