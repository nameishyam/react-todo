import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookie from "js-cookie";
import Axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const loginNavigate = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:8000/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Registration successful!");
        Cookie.set("userEmail", formData.email);
        alert("Registration successful!");
        navigate("/user");
      } else {
        console.error("Registration failed");
        alert("Registration failed. Try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col gap-6 w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg relative"
      >
        <p className="title text-4xl text-blue-400 font-bold tracking-tight text-center">
          Register
        </p>
        <p className="message text-gray-200 text-sm text-center">
          Register now and get full access to our app.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="relative text-gray-200">First Name</label>
            <input
              name="fname"
              onChange={handleChange}
              required
              placeholder=" "
              type="text"
              className="w-full py-3 px-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div>
            <label className="relative text-gray-200">Last Name</label>
            <input
              name="lname"
              onChange={handleChange}
              required
              placeholder=" "
              type="text"
              className="w-full py-3 px-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
        </div>

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
          Already have an account?{" "}
          <button
            type="button"
            onClick={loginNavigate}
            className="text-blue-400 font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
