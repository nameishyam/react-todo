import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="bg-gray-800 py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Task Manager</h1>
        <div className="space-x-4">
          <button
            onClick={navigateHome}
            className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition-colors"
          >
            Home
          </button>
          <button
            onClick={navigateAbout}
            className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition-colors"
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
