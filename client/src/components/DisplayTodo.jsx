import PropTypes from "prop-types";

const DisplayTodo = ({ todoId }) => {
  return (
    <div className="text-white text-2xl">
      Navigated successfully to Todo ID: {todoId}
    </div>
  );
};

DisplayTodo.propTypes = {
  todoId: PropTypes.string.isRequired,
};

export default DisplayTodo;
