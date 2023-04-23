import React from "react";
import "./styles/Input.css";

function Input({
  value,
  onChangeDo,
  maxLength,
  onKeyDownDo,
  autoFocusActive,
  placeHolderText,
  type,
  }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeHolderText}
        autoFocus={autoFocusActive}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            onKeyDownDo();
          }
        }}
        maxLength={maxLength}
        className="todoInput"
        value={value}
        onChange={(e) => onChangeDo(e.target.value)}
      />
    </div>
  );
}

export default Input;
