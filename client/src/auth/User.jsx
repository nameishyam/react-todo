import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";

const User = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleUser = async () => {
    try {
      const userEmail = Cookies.get("userEmail");
      if (!userEmail) {
        throw new Error("User not logged in");
      }
      const response = await fetch("http://localhost:8000/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userEmail}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  //   const userId = Cookies.get("userId");
  //   console.log(userId);

  return (
    <div>
      <div className="min-h-screen bg-gray-800 flex items-center justify-center space-x-6">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
          <p className="text-white text-lg">Container 1</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
          <p className="text-white text-lg">Container 2</p>
        </div>
        <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center space-y-6"></div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
          <p className="text-white text-lg">{user.fname}</p>
          <p className="text-white text-lg">{user.lname}</p>
          <p className="text-white text-lg">{user.email}</p>
          <p className="text-white text-lg">{user.password}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
