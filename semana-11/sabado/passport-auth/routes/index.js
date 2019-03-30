const express = require("express");
const router = express.Router();

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth/login");
};

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("logged", req.user);
  res.render("index");
});

router.get("/private", isAuth, (req, res) => {
  let { user } = req;
  res.render("private", { user });
});

module.exports = router;
