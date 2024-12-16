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

  // Navigate to login
  const loginNavigate = () => {
    navigate("/login");
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("http://localhost:8000/register", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
        {/* Title */}
        <p className="title text-4xl text-blue-400 font-bold tracking-tight text-center">
          Register
        </p>
        <p className="message text-gray-200 text-sm text-center">
          Register now and get full access to our app.
        </p>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-6">
          <label className="relative">
            <input
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
              placeholder=" "
              type="text"
              className="input w-full p-4 outline-none border border-gray-300 rounded-xl focus:border-blue-400 peer leading-tight"
            />
            <span className="absolute left-4 top-4 text-gray-500 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
              Firstname
            </span>
          </label>

          <label className="relative">
            <input
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
              placeholder=" "
              type="text"
              className="input w-full p-4 outline-none border border-gray-300 rounded-xl focus:border-blue-400 peer leading-tight"
            />
            <span className="absolute left-4 top-4 text-gray-500 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
              Lastname
            </span>
          </label>
        </div>

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
