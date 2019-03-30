const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth/login");
};

function checkRoles(role) {
  return function(req, res, next) {
    if (req.isAuthenticated() && req.user.role === role) {
      return next();
    } else {
      res.redirect("/private");
    }
  };
}

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("logged", req.user);
  res.render("index");
});

router.get("/private", isAuth, (req, res) => {
  let { user } = req;
  Property.find()
    .populate("owner")
    .then(properties => {
      properties = properties.map(property => {
        return String(property.owner._id) === String(user._id)
          ? { ...property._doc, canUpdate: true }
          : property;
      });
      console.log(properties);
      res.render("private", { user, properties });
    });
});

router.get("/admin", checkRoles("ADMIN"), (req, res) => {
  let { user } = req;
  Property.find().then(properties => {
    res.render("admin", { properties, user });
  });
});

module.exports = router;
