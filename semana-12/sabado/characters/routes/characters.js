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

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  Characters.create(req.body)
    .then(character => {
      res.status(201).json(character);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id/edit", (req, res) => {
  let { id } = req.params;
  Characters.findById(id).then(character => {
    res.render("form", character);
  });
});

router.patch("/:id/edit", (req, res) => {
  let { id } = req.params;
  Characters.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(character => {
      res.status(200).json(character);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
