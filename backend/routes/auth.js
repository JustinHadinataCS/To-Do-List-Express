const express = require("express");
const router = express.Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(400).json({ error: "Email already in use" });

    const newUser = await User.create({ username, email, password });
    res
      .status(201)
      .json({
        message: "User created",
        user: { id: newUser.id, email: newUser.email },
      });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "dev_secret",
      {
        expiresIn: "1d",
      }
    );

    res.json({ message: "Logged in", token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
