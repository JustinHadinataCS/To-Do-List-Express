const { Sequelize } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Todo = require("./todo")(sequelize, Sequelize.DataTypes);
db.User = require("./user")(sequelize);

module.exports = db;
