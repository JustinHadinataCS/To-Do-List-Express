const express = require("express");
const router = express.Router();
const { Todo } = require("../models");
const auth = require("../middleware/auth");

// Get all todos for logged-in user
router.get("/", auth, async (req, res) => {
  const todos = await Todo.findAll({ where: { UserId: req.user.id } });
  res.json(todos);
});

// Create a new todo
router.post("/", auth, async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const todo = await Todo.create({ title, UserId: req.user.id });
  res.status(201).json(todo);
});

// Toggle completed
router.put("/:id/toggle", auth, async (req, res) => {
  const todo = await Todo.findOne({
    where: { id: req.params.id, UserId: req.user.id },
  });
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

// Delete
router.delete("/:id", auth, async (req, res) => {
  const todo = await Todo.findOne({
    where: { id: req.params.id, UserId: req.user.id },
  });
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  await todo.destroy();
  res.json({ message: "Deleted" });
});

module.exports = router;
