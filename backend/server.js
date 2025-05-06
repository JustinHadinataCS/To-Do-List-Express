require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const { sequelize } = require("./models");
const todoRoutes = require("./routes/todos");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);
app.use("/auth", authRoutes);

// Swagger docs at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  await sequelize.authenticate();
});
