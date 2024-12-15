import React from "react";

const ListHeader = ({ listname }) => {
  const signOut = () => {
    console.log("signout");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0">
      <h1 className="text-3xl text-gray-800 font-sans font-bold text-center sm:text-left">
        {listname}
      </h1>
      <div className="flex space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-all duration-200">
          Add Item
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-all duration-200"
          onClick={signOut}
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
