const express = require("express");
const router = express.Router();
const mailer = require("../helpers/mailer");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/send-mail", (req, res) => {
  res.render("spamer");
});

router.post("/send-mail", (req, res) => {
  let options = req.body;
  options.filename = "verify";
  mailer
    .send(options)
    .then(() => {
      res.redirect("/send-mail");
    })
    .catch(err => {
      console.log(err);
      res.redirect("/");
    });
});

module.exports = router;
