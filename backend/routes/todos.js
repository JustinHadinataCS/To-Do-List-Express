const express = require("express");
const router = express.Router();
const { Todo } = require("../models");

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         completed:
 *           type: boolean
 *       example:
 *         id: 1
 *         title: "Buy groceries"
 *         completed: false
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: List of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get("/", async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created todo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.post("/", async (req, res) => {
  const { title } = req.body;
  const newTodo = await Todo.create({ title, completed: false });
  res.status(201).json(newTodo);
});

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: The updated todo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const [_, [updatedTodo]] = await Todo.update(req.body, {
    where: { id },
    returning: true,
  });
  res.json(updatedTodo);
});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Todo deleted
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.destroy({ where: { id } });
  res.status(204).send();
});

module.exports = router;
