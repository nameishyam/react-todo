const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login");
const localStrategy = require("passport-local");
const session = require("express-session");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { User, Todo, Task } = require("./models");

var cookieParser = require("cookie-parser");
const { nextTick } = require("process");

const saltRounds = 10;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser("shyam gowtham"));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "its my application",
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: `email`,
      passwordField: `password`,
    },
    (username, password, done) => {
      User.findOne({ where: { email: username } })
        .then(async function (user) {
          if (!user) {
            return done(null, false, { message: "User does not exist" });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Invalid password" });
          }
        })
        .catch((error) => {
          return done(error);
        });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      done(error, null);
    });
});

app.get("/", (request, response) => {
  response.send("hello");
});

app.post("/register", async (request, response) => {
  const { fname, lname, email, password } = request.body;
  try {
    const hashedPwd = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      fname,
      lname,
      email,
      password: hashedPwd,
    });

    request.login(user, (error) => {
      if (error) {
        console.error("Login error:", error);
        return response
          .status(500)
          .json({ error: "Login failed after registration" });
      }
      return response.status(200).json(user);
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return response
      .status(500)
      .json({ error: "Registration failed. Please try again." });
  }
});

app.post(
  "/login",
  passport.authenticate(`local`),
  function (request, response) {
    const fname = request.user.fname;
    const lname = request.user.lname;
    const email = request.user.email;
    const user = { fname, lname, email };
    return response.status(200).json(user);
  }
);

app.get("/user", async (request, response) => {
  try {
    const email = request.query.userEmail;
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

app.get("/signout", (request, response) => {
  request.logout((error) => {
    if (error) {
      return response.status(500).json({ error: error.message });
    }
    return response.status(200).json({ message: "Logged out successfully" });
  });
});

app.post("/task", async (request, response) => {
  const { name, userEmail } = request.body;
  const user = await User.findOne({
    where: {
      email: userEmail,
    },
  });
  const userId = user.id;
  try {
    const newTask = await Task.createTask(name, userId);
    return response.status(200).json(newTask);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

app.get("/tasks", async (request, response) => {
  const userEmail = request.query.userEmail;
  const user = await User.findOne({
    where: {
      email: userEmail,
    },
  });
  const userId = user.id;
  try {
    const tasks = await Task.findAll({
      where: {
        userId,
      },
    });
    return response.status(200).json(tasks);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

app.post("/todo", async (request, response) => {
  const { title, description, dueDate, taskId, userEmail } = request.body;
  const user = await User.findOne({
    where: {
      email: userEmail,
    },
  });
  const userId = user.id;
  try {
    const newTodo = await Todo.createTodo({
      title,
      description,
      dueDate,
      userId,
      taskId,
    });
    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

app.get("/todos", async (request, response) => {
  const taskId = request.query.taskId;
  try {
    const todos = await Todo.getAllTodos(taskId);
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

app.delete("/task/:id", async (request, response) => {
  const id = request.params.id;
  try {
    await Todo.destroy({
      where: {
        taskId: id,
      },
    });
    await Task.destroy({
      where: {
        id,
      },
    });
    return response
      .status(200)
      .json({ id, message: "Task deleted successfully" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = app;
