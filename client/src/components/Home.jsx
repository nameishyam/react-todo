import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const registerNavigate = () => {
    navigate("/register");
  };
  const loginNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-5xl font-extrabold text-white text-center leading-snug mb-6">
          Welcome to <br />
          <span className="text-blue-400">Task Manager Application</span>
        </h1>

        <div className="flex justify-center space-x-6">
          <div className="text-center">
            <p className="text-gray-200 text-lg mb-2">New User?</p>
            <button
              onClick={registerNavigate}
              className="py-3 px-6 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-600 transition-all duration-200"
            >
              Register
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-200 text-lg mb-2">Already Registered?</p>
            <button
              onClick={loginNavigate}
              className="py-3 px-6 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-600 transition-all duration-200"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
