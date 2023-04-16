import React from "react";
import "./button.css";

const colorMap = {
  'normal': 'lightgreen',
  'delete': 'pink',
  'active': 'lightblue',
}

function Button({ text, onClickDo, type }) {
  return (
    <button
      className="button"
      onClick={() => onClickDo()}
      style={{backgroundColor: colorMap[type]}}
    >
     {text}
    </button>
  );
}

export default Button;
