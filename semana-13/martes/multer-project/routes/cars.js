const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
const upload = require("../helpers/multer");

router.get("/", (req, res) => {
  Car.find().then(cars => {
    res.render("list", { cars });
  });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", upload.array("images"), (req, res) => {
  req.body.images = req.files.map(file => file.url);
  req.body.new = req.body.new === "on" ? true : false;

  Car.create(req.body).then(car => {
    res.json(car);
  });
});

module.exports = router;
