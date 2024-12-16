import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Footer from "./components/Footer";
import User from "./auth/User";
import Signout from "./auth/Signout";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signout" element={<Signout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
