import React from "react";
import "./styles/Navbar.css";
import { FaTasks } from "react-icons/fa";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Navbar = function () {
  const navigation = useNavigate()
  return (
    <div className="navbar">
      <div className="navbarTitle">
        <FaTasks className="title" />
        <span className="title">To-Do List</span>
      </div>
      <div className="loginButtonBox">
        <Button text={'Login'} onClickDo={()=>navigation('/login')}/>
      </div>
    </div>
  );
};

export default Navbar;
