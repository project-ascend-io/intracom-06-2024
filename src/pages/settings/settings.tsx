// import React from "react";
import "./settings.css";
import LeftsideBar from "../../Components/leftside-bar/leftside-bar";
import Navbar from "../../Components/nav-bar/nav-bar";

const Settings = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex md:flex-col">
        <LeftsideBar />
      </div>
    </div>
  );
};

export default Settings;
