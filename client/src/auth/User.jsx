import { useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Task from "../components/Task";
import Todos from "../components/Todos";

const User = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const userEmail = Cookies.get("userEmail");
  const handleUser = async () => {
    const response = await Axios.get("http://localhost:8000/user", {
      params: {
        userEmail,
      },
    });
    setUser(response.data);
  };

  useEffect(() => {
    handleUser();
  }, []);

  const navigate = useNavigate();
  const signoutNavigate = () => {
    navigate("/signout");
  };

  return (
    <>
      <div className="bg-gray-800">
        <div className="flex justify-between items-center px-8 py-4">
          <h1 className="text-white text-4xl">
            Welcome {user.fname} {user.lname} !
          </h1>
          <button
            onClick={signoutNavigate}
            className="py-3 px-6 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-600 transition-all duration-200"
          >
            Signout
          </button>
        </div>
        <div className="min-h-screen bg-gray-800 flex items-center justify-center space-x-6">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
            <p className="text-white text-lg">Todos</p>
            <Todos />
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
            <p className="text-white text-lg">Add a Task</p>
            <Task />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
