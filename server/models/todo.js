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

      Todo.belongsTo(models.Task, {
        foreignKey: "taskId",
      });
    }

    static getAllTodos(taskId) {
      return this.findAll({
        where: {
          taskId,
        },
      });
    }

    static createTodo({ title, description, dueDate, userId, taskId }) {
      return this.create({
        title,
        description,
        dueDate,
        userId,
        taskId,
        completed: false,
      });
    }

    markAsCompleted() {
      return this.completed
        ? this.update({ completed: false })
        : this.update({ completed: true });
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
