const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models");

app.use(express.json());
app.use(cors());

// Temporary test route
app.get("/", (req, res) => {
  res.send("Todo API is running!");
});

// Start server
const PORT = process.env.PORT || 3000;

const todoRoutes = require("./routes/todos");
app.use("/todos", todoRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
