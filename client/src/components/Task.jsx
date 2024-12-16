import React from "react";

const Task = () => {
  return (
    <form>
      <input type="text" placeholder="Task" className="input" required />
      <input type="date" placeholder="Date" className="input" required />
      <button className="btn">Add Task</button>
    </form>
  );
};

export default Task;
