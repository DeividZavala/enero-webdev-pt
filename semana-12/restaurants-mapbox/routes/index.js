const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/restaurants", (req, res) => {
  res.render("restaurants");
});

module.exports = router;
