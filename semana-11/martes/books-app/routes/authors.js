const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

router.get("/add", (req, res) => {
  res.render("new_author");
});

router.post("/add", (req, res) => {
  Author.create(req.body).then(() => {
    res.redirect("/books");
  });
});

module.exports = router;
