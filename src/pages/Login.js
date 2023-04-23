import React, { useState } from "react";
import "./styles/Register.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="registerBox box-shadow-0">
      <span className="title">Login ✌️</span>
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
          placeHolderText={"Enter Password"}
          type={"password"}
          maxLength={16}
          value={userPassword}
          onChangeDo={(e) => setUserPassword(e)}
        />
        <Button text={"Login"} type={"login"} />
      </div>
      <span>
        No account? 👉<Link to={"/register"}> Register</Link>
      </span>
    </div>
  );
};
