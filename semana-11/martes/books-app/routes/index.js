const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/books", (req, res) => {
  //const { page = 0 } = req.query;
  //let limit = 5;
  //let skip = page * limit;
  Book.find()
    //.limit(limit)
    //.skip(skip)
    .then(books => {
      res.render("books", { books });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  Book.findById(id).then(book => {
    res.render("detail", book);
  });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  Book.create(req.body).then(() => {
    res.redirect("/books");
  });
});

router.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  Book.findById(id).then(book => {
    res.render("new", book);
  });
});

router.post("/:id/edit", (req, res) => {
  const { id } = req.params;
  Book.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true }).then(
    book => {
      res.redirect(`/detail/${book._id}`);
    }
  );
});

module.exports = router;
