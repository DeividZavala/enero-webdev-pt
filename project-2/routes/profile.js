const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploader = require("../helpers/multer");
const helpers = require("../helpers/function");
const Property = require("../models/Property");

router.get("/", helpers.isAuth, (req, res) => {
  const { user } = req;
  Property.find({ owner: user._id }).then(properties => {
    res.render("profile", { user, properties });
  });
});

router.get("/:id/edit", helpers.isAuth, (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      res.render("profile-form", { user });
    })
    .catch(err => {
      res.render("profile-form", { err });
    });
});

router.post(
  "/:id/edit",
  helpers.isAuth,
  uploader.single("image"),
  (req, res) => {
    const { id: _id } = req.params;
    const { email } = req.user;
    const image = req.file ? req.file.url : undefined;
    const user = image ? { ...req.body, image } : req.body;
    User.findOneAndUpdate({ _id, email }, { $set: user })
      .then(() => {
        res.redirect("/profile");
      })
      .catch(err => {
        res.render("profile-form", { err });
      });
  }
);

module.exports = router;
