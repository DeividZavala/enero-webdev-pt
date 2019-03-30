const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("auth-form", { login: true });
});

router.post("/login", (req, res) => {});

router.get("/register", (req, res) => {
  res.render("auth-form");
});

router.post("/register", (req, res) => {});

router.post("/logout", (req, res) => {});

module.exports = router;
