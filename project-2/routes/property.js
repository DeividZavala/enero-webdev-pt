const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const uploader = require("../helpers/multer");
const helpers = require("../helpers/function");

router.get("/new", helpers.isAuth, (req, res) => {
  res.render("new-property");
});

router.post("/new", helpers.isAuth, uploader.array("images"), (req, res) => {
  let images = req.files.map(file => file.url);
  let { _id: owner } = req.user;
  let property = { ...req.body, images, owner };
  Property.create(property)
    .then(() => {
      res.redirect("/profile");
    })
    .catch(err => {
      res.render("new-property", { err });
    });
});

module.exports = router;
