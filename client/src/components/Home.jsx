import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <div>Home</div>
      <button onClick={navigateAbout}>About</button>
    </>
  );
};

export default Home;
