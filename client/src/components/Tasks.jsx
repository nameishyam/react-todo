import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const Tasks = ({ tasks }) => {
  const navigate = useNavigate();

  const navigateToTodoTask = (taskId, taskName) => {
    Cookie.set("taskId", taskId);
    Cookie.set("taskName", taskName);
    navigate(`/tasks`);
  };

  return (
    <>
      <ul className="text-white text-lg">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="py-2 px-4 bg-gray-700 rounded-md mb-2 cursor-pointer hover:bg-gray-600 transition duration-300"
            onClick={() => navigateToTodoTask(task.id, task.name)}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
