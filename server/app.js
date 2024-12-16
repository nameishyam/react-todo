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

app.get("/user", async (request, response) => {
  try {
    const email = request.query.email;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const { fname, lname, email } = user;
      return response.status(200).json({ fname, lname, email });
    } else {
      return response.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = app;
