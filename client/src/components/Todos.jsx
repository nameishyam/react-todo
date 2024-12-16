import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleUser = async () => {
    try {
      const userId = Cookies.get("userId");
      if (!userId) {
        throw new Error("User not logged in");
      }
      const response = await fetch("http://localhost:8000/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userId}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTodos(data.todos);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center space-x-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
        <p className="text-white text-lg">Container 1</p>
      </div>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
        <p className="text-white text-lg">Container 2</p>
      </div>
      <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center space-y-6"></div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md"
        >
          <p className="text-white text-lg">{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
