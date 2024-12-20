"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Task.hasMany(models.Todo, {
        foreignKey: "taskId",
      });
    }

    static getAllTasks(userId) {
      return this.findAll({
        where: {
          userId,
        },
      });
    }

    static createTask(name, userId) {
      return this.create({
        name,
        userId,
        completed: false,
      });
    }

    markAsCompleted() {
      return this.completed
        ? this.update({ completed: false })
        : this.update({ completed: true });
    }
  }
  Task.init(
    {
      name: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
