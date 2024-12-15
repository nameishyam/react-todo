import React, { useEffect } from "react";

function Auth() {
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
  return <div>Auth</div>;
}

export default Auth;
