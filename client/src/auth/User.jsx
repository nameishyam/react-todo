import { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Task from "../components/Task";
import Tasks from "../components/Tasks";

const User = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const [tasks, setTasks] = useState([]);

  const handleTasks = useCallback(async () => {
    const userEmail = Cookies.get("userEmail");
    try {
      const response = await Axios.get("http://localhost:8000/tasks", {
        params: { userEmail },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  }, []);

  const handleUser = useCallback(async () => {
    const userEmail = Cookies.get("userEmail");
    try {
      const response = await Axios.get("http://localhost:8000/user", {
        params: { userEmail },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  }, []);

  useEffect(() => {
    handleUser();
    handleTasks();
  }, [handleUser, handleTasks]);

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
        <div className="min-h-screen bg-gray-800 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-80 sm:w-96 transform transition duration-300 hover:scale-105">
              <p className="text-white text-lg mb-3">Tasks</p>
              <Tasks tasks={tasks} />
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-80 sm:w-96 transform transition duration-300 hover:scale-105">
              <p className="text-white text-lg mb-3">Add a Task</p>
              <Task />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
