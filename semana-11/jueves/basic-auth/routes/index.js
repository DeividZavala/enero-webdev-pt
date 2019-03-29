const express = require("express");
const router = express.Router();

const isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

/* GET home page */
router.get("/", isLoggedIn, (req, res, next) => {
  res.render("index");
});

module.exports = router;
