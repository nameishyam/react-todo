const express = require("express");
const app = express();
const { users, todos } = require("./models");

app.get("/", (request, response) => {
  response.send("hello");
});

app.get("/todos", async (request, response) => {
  try {
    const todo = await todos.findAll();
    return response.json(todos);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

app.post("/todos", async (request, response) => {
  try {
    const todo = await todos.create(request.body);
    return response.json(todos);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = app;
