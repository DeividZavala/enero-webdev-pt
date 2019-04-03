const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurant");

router.get("/", (req, res) => {
  res.render("restaurants");
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  let { lng, lat, name, description } = req.body;
  let rest = {
    name,
    description,
    location: {
      type: "Point",
      coordinates: [lng, lat]
    }
  };
  console.log(rest);
  Restaurants.create(rest).then(rest => {
    res.redirect("/restaurants");
  });
});

module.exports = router;
