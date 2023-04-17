import React, { useContext } from "react";
import "./styles/Input.css";
import { AppContext } from "../App";

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
