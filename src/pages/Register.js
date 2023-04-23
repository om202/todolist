import React, { useState } from "react";
import "./styles/Register.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="registerBox box-shadow-0">
      <span className="title">Register 😎</span>
      <div className="registerInputForm">
        <Input
          placeHolderText={"Enter Username"}
          type={"text"}
          autoFocusActive={true}
          maxLength={16}
          value={userName}
          onChangeDo={(e) => setUserName(e)}
        />
        <Input
          placeHolderText={"Enter Email"}
          type={"email"}
          value={userEmail}
          onChangeDo={(e) => setUserEmail(e)}
        />
        <Input
          placeHolderText={"Enter Password"}
          type={"password"}
          maxLength={16}
          value={userPassword}
          onChangeDo={(e) => setUserPassword(e)}
        />

        <select className="userTypeSelect" value={2}>
          <option value={"User"}>User</option>
          <option value={"Moderator"}>Moderator</option>
          <option value={"Admin"}>Admin</option>
        </select>

        <Button text={"Register"} type={"login"} />
      </div>
      <span>
        Already have an account? 👉<Link to={"/login"}> Login</Link>
      </span>
    </div>
  );
};
