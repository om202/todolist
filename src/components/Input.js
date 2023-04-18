import React from "react";
import "./styles/Input.css";

function Input({ value, onChangeDo, maxLength, onKeyDownDo }) {
  return (
    <div>
      <input
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            onKeyDownDo();
          }
        }}
        maxLength={maxLength}
        className="todoInput"
        type="text"
        value={value}
        onChange={(e) => onChangeDo(e.target.value)}
      />
    </div>
  );
}

export default Input;
