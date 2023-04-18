import React from "react";
import "./styles/Navbar.css";
import { FaTasks } from "react-icons/fa";
import Button from "../components/Button";

const Navbar = function () {
  return (
    <div className="navbar">
      <div className="navbarTitle">
        <FaTasks className="title" />
        <span className="title">To-Do List</span>
      </div>
      <div className="loginBox">
        <Button text={'Login'}/>
      </div>
    </div>
  );
};

export default Navbar;
