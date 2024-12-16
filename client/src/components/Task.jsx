import Axios from "axios";
import { useState } from "react";
import Cookie from "js-cookie";

const Task = () => {
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
      const response = await Axios.post("http://localhost:8000/task", task, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("task added successfully");
        Cookie.set("task", task.name);
      } else {
        console.log("task not added");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        onChange={handleChange}
        placeholder=" "
        className="w-full py-3 px-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        required
      />
      <button
        type="submit"
        className="w-full py-3 px-6 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-600 transition-all duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default Task;
