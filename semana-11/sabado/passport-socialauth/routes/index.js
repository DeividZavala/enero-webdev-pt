const express = require("express");
const router = express.Router();

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", isAuth, (req, res) => {
  let { user } = req;
  res.render("profile", { user });
});

module.exports = router;
