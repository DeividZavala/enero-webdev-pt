const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const authUtils = require("../helpers/auth");

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
router.post("/", authUtils.verifyToken, (req, res) => {
  const { _id: author } = req.user;

  Todo.create({ ...req.body, author })
    .then(todo => {
      res.status(201).json({ todo });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "No se puedo crear el todo",
      });
    });
});

// update todo
router.patch("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;

  Todo.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(todo => {
      res.status(200).json({ todo });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Error al editar el todo",
      });
    });
});

// delete todo
router.delete("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;

  Todo.findByIdAndDelete(id)
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
