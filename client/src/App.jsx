import React, { useEffect } from "react";
import ListHeader from "./components/ListHeader";
import "./index.css";

const App = () => {
  const getData = async () => {
    const userEmail = "test@gmail.com";
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`, {
        method: "POST",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ListHeader listname={"Holiday Tick List"} />
      </div>
    </div>
  );
};

export default App;
