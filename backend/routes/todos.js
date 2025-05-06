const express = require("express");
const router = express.Router();
const { Todo } = require("../models");
const authenticateToken = require("../middleware/auth");

/**
 * GET /todos - Get all todos for the logged-in user
 */
router.get("/", authenticateToken, async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: { userId: req.user.userId },
    });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * POST /todos - Create a new todo for the logged-in user
 */
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = await Todo.create({
      title,
      completed: false,
      userId: req.user.userId,
    });
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * PUT /todos/:id - Update a todo (if it belongs to the user)
 */
router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const [_, [updatedTodo]] = await Todo.update(
      { title, completed },
      {
        where: { id, userId: req.user.userId },
        returning: true,
      }
    );

    if (!updatedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * DELETE /todos/:id - Delete a todo (if it belongs to the user)
 */
router.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Todo.destroy({
      where: { id, userId: req.user.userId },
    });

    if (!deleted) return res.status(404).json({ message: "Todo not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
