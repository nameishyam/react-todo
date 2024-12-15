import React from "react";
import ListHeader from "./components/ListHeader";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ListHeader listname={"Holiday Tick List"} />
      </div>
    </div>
  );
};

export default App;
