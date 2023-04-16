import React, { useContext } from "react";
import "./input.css";
import { AppContext } from "../App";
import Button from "../button/button";

function Input() {
  const { updateTodoText, todoText } = useContext(AppContext);
  return (
    <div>
      <input
        className="todoInput"
        type="text"
        value={todoText}
        onChange={(e) => updateTodoText(e.target.value)}
      />
    </div>
  );
}

export default Input;
