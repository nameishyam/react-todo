import { useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import Task from "../components/Task";
import Todos from "../components/Todos";
import Signout from "./Signout";

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

  return (
    <>
      <div className="bg-gray-800">
        <h1 className="text-white text-4xl text-center">
          Welcome {user.fname} {user.lname} !
        </h1>
        <div className="min-h-screen bg-gray-800 flex items-center justify-center space-x-6">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
            <p className="text-white text-lg">
              <Todos />
            </p>
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
