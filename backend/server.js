const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

// Temporary test route
app.get("/", (req, res) => {
  res.send("Todo API is running!");
});

// Start server
const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
