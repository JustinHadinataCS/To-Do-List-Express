// backend/swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "To-Do List API",
      version: "1.0.0",
      description: "Simple Express API for managing tasks",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], // We'll write Swagger docs in the routes
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
