import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./auth/Register";
import Login from "./auth/Login";
import User from "./auth/User";
import Todo from "./components/Todo";
import DisplayTodo from "./components/DisplayTodo";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Todo />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/displayTodo" element={<DisplayTodo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
