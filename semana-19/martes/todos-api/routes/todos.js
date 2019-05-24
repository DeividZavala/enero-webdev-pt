const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const authUtils = require("../helpers/auth");
const uploader = require("../helpers/multer");

// get todos
router.get("/", authUtils.verifyToken, (req, res) => {
  const { _id } = req.user;
  Todo.find({ author: _id })
    .then(todos => {
      res.status(200).json({ todos });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Error al buscar los todos",
      });
    });
});

// get todo
router.get("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;

  Todo.findById(id)
    .then(todo => {
      res.status(200).json({ todo });
    })
    .catch(error => {
      res.status(404).json({
        error,
        message: "Error al buscar el todo",
      });
    });
});

// create todo
router.post(
  "/",
  authUtils.verifyToken,
  uploader.array("images"),
  (req, res) => {
    const { _id: author } = req.user;

    const images = req.files.map(file => file.secure_url);

    Todo.create({ ...req.body, author, images })
      .then(todo => {
        res.status(201).json({ todo });
      })
      .catch(error => {
        res.status(500).json({
          error,
          message: "No se puedo crear el todo",
        });
      });
  }
);

// update todo
router.patch("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;
  const { _id: author } = req.user;

  Todo.findOneAndUpdate({ _id: id, author }, { $set: req.body }, { new: true })
    .then(todo => {
      res.status(200).json({ todo });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "No puedes editar por que seguro no es tu todo",
      });
    });
});

// delete todo
router.delete("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;
  const { _id: author } = req.user;

  Todo.findOneAndRemove({ _id: id, author })
    .then(todo => {
      res.status(200).json({ todo });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Error al eliminar el todo",
      });
    });
});

module.exports = router;
