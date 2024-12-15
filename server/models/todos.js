"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      todos.belongsTo(models.users, {
        foreignKey: "user_email",
      });
    }
  }
  todos.init(
    {
      user_email: DataTypes.STRING,
      title: DataTypes.STRING,
      progress: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "todos",
    }
  );
  return todos;
};
