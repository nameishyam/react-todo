import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        Cookies.set("userEmail", data.email);
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
        {/* Title */}
        <p className="title text-4xl text-blue-400 font-bold tracking-tight text-center">
          Login
        </p>
        <p className="message text-gray-200 text-sm text-center">
          Welcome Back!
        </p>

        {/* Input Fields */}

        <label className="relative">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
            type="email"
            className="input w-full p-4 outline-none border border-gray-300 rounded-xl focus:border-blue-400 peer leading-tight"
          />
          <span className="absolute left-4 top-4 text-gray-500 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
            Email
          </span>
        </label>

        <label className="relative">
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder=" "
            type="password"
            className="input w-full p-4 outline-none border border-gray-300 rounded-xl focus:border-blue-400 peer leading-tight"
          />
          <span className="absolute left-4 top-4 text-gray-500 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
            Password
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit w-full bg-gray-700 p-4 rounded-xl text-white font-semibold text-lg hover:bg-gray-600 transition-transform active:scale-95"
        >
          Submit
        </button>

        {/* Sign-in Link */}
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
