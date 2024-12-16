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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Welcome to my task manager application
        </h1>

        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-200 text-lg mb-2">new user?</p>
            <button
              onClick={registerNavigate}
              className="w-full py-3 px-6 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200"
            >
              Register
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-200 text-lg mb-2">already registered?</p>
            <button
              onClick={loginNavigate}
              className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200"
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
