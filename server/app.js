const express = require("express");
const bodyParser = require("body-parser");
const { User, Todo } = require("./models");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("hello");
});

app.get("/todos", async (request, response) => {
  try {
    const userId = request.body.id;
    const todo = await Todo.getAllTodos(userId);
    return response.json(todo);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

app.post("/todos", async (request, response) => {
  try {
    const title = request.body.title;
    const description = request.body.description;
    const dueDate = request.body.dueDate;
    const progress = request.body.progress;
    const todo = await Todo.createTodo({
      title,
      description,
      dueDate,
      progress,
    });
    return response.json(todo);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = app;
