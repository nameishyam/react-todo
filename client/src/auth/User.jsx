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

  const navigate = useNavigate();

  const handleTasks = useCallback(async () => {
    const userEmail = Cookies.get("userEmail");
    console.log("Fetching tasks for:", userEmail);
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
    console.log("Fetching user for:", userEmail);
    try {
      const response = await Axios.get("http://localhost:8000/user", {
        params: { userEmail },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  }, []);

  const handleSignout = async () => {
    try {
      const response = await Axios.get("http://localhost:8000/signout");
      if (response.status === 200) {
        console.log("Signed out successfully");
        ["userEmail", "taskId", "taskName"].forEach(Cookies.remove);
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to signout:", error);
    }
  };

  useEffect(() => {
    handleUser();
    handleTasks();
  }, [handleUser, handleTasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  console.log("User state:", user);

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 pt-16 pb-16">
        <div className="text-center mb-8">
          {user.fname && user.lname ? (
            <h1 className="text-white text-3xl">
              Welcome {user.fname} {user.lname} !
            </h1>
          ) : (
            <h1 className="text-white text-2xl">Loading...</h1>
          )}
          <button
            onClick={handleSignout}
            className="px-6 py-3 bg-gray-700 text-white rounded-md font-semibold mt-4"
          >
            Signout
          </button>
        </div>
        <div className="flex gap-6">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-80 sm:w-96">
            <p className="text-white text-lg mb-3">Tasks</p>
            <Tasks tasks={tasks} setTasks={setTasks} addTask={addTask} />
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-80 sm:w-96">
            <p className="text-white text-lg mb-3">Add a Task</p>
            <Task addTask={addTask} />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
