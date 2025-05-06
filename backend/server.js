require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { sequelize } = require("./models");
const todoRoutes = require("./routes/todos");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

// Swagger docs at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  await sequelize.authenticate();
});
