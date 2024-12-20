import Axios from "axios";
import Cookie from "js-cookie";
import { useState } from "react";

function Todo() {
  const taskId = Cookie.get("taskId");
  const taskName = Cookie.get("taskName");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
    taskId: taskId,
    userEmail: Cookie.get("userEmail"),
  });

  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:8000/todo",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log("Todo added successfully!");
      } else {
        console.error("Failed to add todo");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const allTodos = async () => {
    try {
      const response = await Axios.get("http://localhost:8000/todos", {
        params: { taskId },
      });

      if (response.status === 200) {
        setTodos(response.data);
        console.log(response);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="flex flex-row items-start justify-center gap-8 px-8 py-10">
        {/* Random Text Container */}
        <div className="flex flex-col items-center justify-center w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
          <h1 className="text-white text-4xl font-bold mb-6">
            Todos for {taskName}
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            This is some random text.
          </p>
          <button
            onClick={allTodos}
            className="mt-4 bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            Load All Todos
          </button>
          <ul className="mt-4 text-white">
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>

        {/* Existing Form Container */}
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-white text-4xl font-bold mb-6">{taskName}</h1>
          <h2 className="text-gray-300 text-lg mb-4">
            Add Todo for this task:
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg flex flex-col gap-8"
          >
            {/* Title Field */}
            <label className="relative block text-white">
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder=" "
                type="text"
                className="w-full p-4 bg-gray-700 text-white outline-none border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 peer"
              />
              <span className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs">
                Title
              </span>
            </label>

            {/* Description Field */}
            <label className="relative block text-white">
              <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder=" "
                type="text"
                className="w-full p-4 bg-gray-700 text-white outline-none border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 peer"
              />
              <span className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs">
                Description
              </span>
            </label>

            {/* Due Date Field */}
            <label className="relative block text-white">
              <input
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                required
                placeholder=" "
                type="text"
                className="w-full p-4 bg-gray-700 text-white outline-none border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 peer"
              />
              <span className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs">
                Due Date
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todo;
