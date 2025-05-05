const { Todo } = require("../models");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos." });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title, completed: false });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo." });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    todo.title = title ?? todo.title;
    todo.completed = completed ?? todo.completed;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo." });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.destroy({ where: { id } });

    if (!deleted) return res.status(404).json({ error: "Todo not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo." });
  }
};
