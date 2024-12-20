import Axios from "axios";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import PropTypes from "prop-types";

const Task = ({ addTask }) => {
  const [task, setTask] = useState({
    name: "",
    userEmail: Cookie.get("userEmail"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:8000/task",
        {
          name: task.name,
          userEmail: task.userEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        Cookie.set("task", task.name);
        addTask(response.data);
      } else {
        console.log("task not added");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    setTask((prevTask) => ({
      ...prevTask,
      userEmail: Cookie.get("userEmail"),
    }));
  }, []);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        placeholder=" "
        className="w-full py-3 px-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        required
      />

      <button
        type="submit"
        className="w-full py-3 px-6 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-600"
      >
        Add Task
      </button>
    </form>
  );
};

Task.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Task;
