import React from "react";
import "./styles/Navbar.css";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { MdTask } from "react-icons/md";

const Navbar = function () {
  const navigation = useNavigate();
  const loginUser = "";
  return (
    <div className="navbar box-shadow-0">
      <Link to={'/'}>
        <div className="navbarTitle">
          <MdTask className="title"/>
          <span className="title">Karma</span>
        </div>
      </Link>
      <div className="loginButtonBox">
        {loginUser ? (
          <div className="userSignout">
            <span className="loginUser subtitle-1">{loginUser}</span>
            <Button
              text={"Logout"}
              type={"login"}
              onClickDo={() => navigation("/signout")}
            />
          </div>
        ) : (
          <Button
            text={"Login"}
            type={"login"}
            onClickDo={() => navigation("/login")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
