import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const registerNavigate = () => {
    navigate("/register");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:8000/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        Cookies.set("userEmail", response.data.email);
        console.log("login successful");
        navigate("/user");
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col gap-6 w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg relative"
      >
        <p className="title text-4xl text-blue-400 font-bold tracking-tight text-center">
          Login
        </p>
        <p className="message text-gray-200 text-sm text-center">
          Welcome Back!
        </p>

        <label className="relative text-gray-200">Email</label>
        <input
          name="email"
          onChange={handleChange}
          required
          placeholder=" "
          type="email"
          className="w-full py-3 px-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        <label className="relative text-gray-200">Password</label>
        <input
          name="password"
          onChange={handleChange}
          required
          placeholder=" "
          type="password"
          className="w-full py-3 px-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        <button
          type="submit"
          className="submit w-full bg-gray-700 p-4 rounded-xl text-white font-semibold text-lg hover:bg-gray-600 transition-transform active:scale-95"
        >
          Submit
        </button>

        <p className="signin text-center text-gray-200 text-sm">
          New Here?{" "}
          <button
            type="button"
            onClick={registerNavigate}
            className="text-blue-400 font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
