import PropTypes from "prop-types";

const Tasks = ({ tasks }) => {
  console.log(typeof tasks);
  return (
    <>
      <ul className="text-white text-lg">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="py-2 px-4 bg-gray-700 rounded-md mb-2 cursor-pointer hover:bg-gray-600 transition duration-300"
            onClick={() => navigateToTodoTask(task.id)}
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
