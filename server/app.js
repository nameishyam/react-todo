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

app.post("/register", (request, response) => {
  const { fname, lname, email, password } = request.body;
  User.create({ fname, lname, email, password })
    .then((user) => {
      response.json(user);
    })
    .catch((error) => {
      response.status(500).json({ error: error.message });
    });
});

app.post("/login", (request, response) => {
  const { email, password } = request.body;
  User.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      if (user.password === password) {
        response.json(user);
      } else {
        response.status(401).json({ error: "Invalid credentials" });
      }
    })
    .catch((error) => {
      response.status(500).json({ error: error.message });
    });
});

app.get("/user", (request, response) => {
  try {
    const email = request.body.email;
    const user = User.findOne({
      where: {
        email,
      },
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = app;
