const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurant");

router.get("/", (req, res) => {
  Restaurants.find().then(restaurants => {
    res.render("restaurants", { restaurants });
  });
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
  Restaurants.create(rest).then(rest => {
    res.redirect("/restaurants");
  });
});

router.get("/:id/edit", (req, res) => {
  let { id } = req.params;
  Restaurants.findById(id).then(restaurant => {
    res.render("new", restaurant);
  });
});

router.post("/:id/edit", (req, res) => {
  let { id } = req.params;
  let { lng, lat, name, description } = req.body;
  let rest = {
    name,
    description,
    location: {
      type: "Point",
      coordinates: [lng, lat]
    }
  };
  Restaurants.findByIdAndUpdate(id, { $set: rest }).then(() => {
    res.redirect("/restaurants");
  });
});

router.get("/:id/delete", (req, res) => {
  let { id } = req.params;
  Restaurants.findByIdAndDelete(id).then(() => {
    res.redirect("/restaurants");
  });
});

module.exports = router;
