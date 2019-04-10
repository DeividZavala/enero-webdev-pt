const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

router.get("/new", (req, res) => {
  res.render("form");
});

module.exports = router;
