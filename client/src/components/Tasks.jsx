import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import Axios from "axios";

const Tasks = ({ tasks, setTasks }) => {
  const navigate = useNavigate();

  const navigateToTodoTask = (taskId, taskName) => {
    Cookie.set("taskId", taskId);
    Cookie.set("taskName", taskName);
    navigate(`/tasks`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:8000/task/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Task deleted successfully");
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.error("Error occurred while deleting the task:", error);
    }
  };

  return (
    <ul className="text-white text-lg">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="py-2 px-4 bg-gray-700 rounded-md mb-2 cursor-pointer flex justify-between items-center shadow-lg"
          onClick={() => navigateToTodoTask(task.id, task.name)}
        >
          <span className="opacity-90">{task.name}</span>
          <button
            className="ml-4 bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-400"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(task.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Tasks;
