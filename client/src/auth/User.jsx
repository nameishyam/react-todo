import { useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";

const User = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const email = Cookies.get("userEmail");
  const handleUser = async () => {
    const response = await Axios.get("http://localhost:8000/user", {
      params: {
        email,
      },
    });
    setUser(response.data);
  };

  useEffect(() => {
    handleUser();
  }, []);

  //   const userId = Cookies.get("userId");
  //   console.log(userId);

  return (
    <div>
      {/* <div className="min-h-screen bg-gray-800 flex items-center justify-center space-x-6">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
          <p className="text-white text-lg">Container 1</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md">
          <p className="text-white text-lg">Container 2</p>
        </div>
      </div> */}
      {user.fname}
    </div>
  );
};

export default User;
