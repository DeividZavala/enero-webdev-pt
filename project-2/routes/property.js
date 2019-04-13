const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const uploader = require("../helpers/multer");
const helpers = require("../helpers/function");

router.get("/", (req, res) => {
  const { user } = req;
  Property.find()
    .limit(20)
    .then(properties => {
      res.render("properties", { properties, user });
    });
});

router.get("/json", (req, res) => {
  Property.find()
    .limit(20)
    .then(properties => {
      res.status(200).json({ properties });
    });
});

router.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  const { user } = req;
  Property.findById(id).then(property => {
    res.render("new-property", { user, property });
  });
});

router.post(
  "/:id/edit",
  helpers.isAuth,
  uploader.array("images"),
  (req, res) => {
    const { id } = req.params;
    const { lat, lng, address, ...property } = req.body;
    let location = { address, coordinates: [lat, lng] };
    Property.findByIdAndUpdate(id, { $set: { ...property, location } }).then(
      () => {
        res.redirect("/properties");
      }
    );
  }
);

router.get("/new", helpers.isAuth, (req, res) => {
  const { user } = req;
  res.render("new-property", { user });
});

router.post("/new", helpers.isAuth, uploader.array("images"), (req, res) => {
  let images = req.files.map(file => file.url);
  let { _id: owner } = req.user;
  let { lat, lng, address, ...property } = req.body;
  let location = { address, coordinates: [lat, lng] };
  property = { ...property, images, owner, location };
  Property.create(property)
    .then(() => {
      res.redirect("/profile");
    })
    .catch(err => {
      res.render("new-property", { err });
    });
});

module.exports = router;
