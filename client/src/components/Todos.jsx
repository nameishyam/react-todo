import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Todos = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center space-x-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
        <p className="text-white text-lg">Container 1</p>
      </div>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
        <p className="text-white text-lg">Container 2</p>
      </div>
    </div>
  );
};

export default Todos;
