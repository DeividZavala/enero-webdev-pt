const express = require("express");
const router = express.Router();
const Characters = require("../models/Character");

router.get("/", (req, res) => {
  res.render("characters");
});

router.get("/info", (req, res) => {
  Characters.find()
    .then(characters => {
      res.status(200).json({ characters });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
