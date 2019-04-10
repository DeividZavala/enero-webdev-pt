const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
const multer = require("multer");
const upload = multer({
  dest: `./public/images`
});

router.get("/", (req, res) => {
  Car.find().then(cars => {
    res.render("list", { cars });
  });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", upload.single("image"), (req, res) => {
  req.body.image = `/images/${req.file.filename}`;
  req.body.new = req.body.new === "on" ? true : false;

  Car.create(req.body).then(car => {
    res.json(car);
  });
});

module.exports = router;
