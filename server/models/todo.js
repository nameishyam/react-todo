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
      // define association here
      Todo.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }

    static getAllTodos(userId) {
      return this.findAll({
        where: {
          userId,
        },
      });
    }

    static createTodo({ title, description, dueDate, progress }) {
      return this.create({
        title,
        description,
        dueDate,
        progress,
      });
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      progress: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
