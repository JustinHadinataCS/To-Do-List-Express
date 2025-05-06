"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
      Todo.belongsTo(models.User, { foreignKey: "userId" });
    }
  }

  Todo.init(
    {
      title: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
      userId: {
        // Add this field to associate with a user
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users", // This should match the name of your User model
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );

  return Todo;
};
