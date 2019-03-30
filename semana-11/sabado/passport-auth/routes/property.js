const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

router.get("/new", (req, res) => {
  res.render("property-form");
});

router.post("/new", (req, res) => {
  let { user } = req;
  req.body.owner = user._id;
  Property.create(req.body)
    .populate("owner")
    .then(() => {
      res.redirect("/private");
    });
});

module.exports = router;
