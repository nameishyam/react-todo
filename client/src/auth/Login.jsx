import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const registerNavigate = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form className="form flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-2xl shadow-lg relative">
          <p className="title text-3xl text-royalblue font-semibold tracking-tight text-center">
            Login
          </p>
          <p className="message text-gray-600 text-sm text-center">
            Welcome Back!
          </p>
          <label className="relative">
            <input
              required
              placeholder=""
              type="email"
              className="input w-full p-3 outline-none border border-gray-300 rounded-lg focus:border-royalblue"
            />
            <span className="absolute left-3 top-3.5 text-gray-500 text-sm pointer-events-none transition-all">
              Email
            </span>
          </label>
          <label className="relative">
            <input
              required
              placeholder=""
              type="password"
              className="input w-full p-3 outline-none border border-gray-300 rounded-lg focus:border-royalblue"
            />
            <span className="absolute left-3 top-3.5 text-gray-500 text-sm pointer-events-none transition-all">
              Password
            </span>
          </label>
          <button className="submit w-full bg-royalblue p-3 rounded-lg text-white font-semibold text-lg hover:bg-blue-600 transition-transform active:scale-95">
            Submit
          </button>
          <p className="signin text-center text-gray-600 text-sm">
            New Here?{" "}
            <button
              className="link text-royalblue font-semibold hover:underline"
              onClick={registerNavigate}
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
