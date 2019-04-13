const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("auth-form", { action: "Login" });
});

router.get("/register", (req, res) => {
  res.render("auth-form", { action: "Register" });
});

module.exports = router;
