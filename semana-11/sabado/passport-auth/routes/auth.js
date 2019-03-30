const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("auth-form", { login: true });
});

router.post("/login", (req, res) => {});

router.get("/register", (req, res) => {
  res.render("auth-form");
});

router.post("/register", (req, res) => {
  let { password, email, passwordConfirm } = req.body;

  if (password !== passwordConfirm)
    return res.render("auth-form", {
      err: "Las contras no son las mismas perro"
    });
});

router.post("/logout", (req, res) => {});

module.exports = router;
