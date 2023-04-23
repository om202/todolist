import React from "react";
import "./styles/Button.css";
import {BsCheckLg, BsPerson, BsPlusLg, BsTrash} from "react-icons/bs"

const colorMap = {
  add: "lightgreen",
  done: "skyblue",
  delete: "pink",
  active: "lightblue",
  login: "skyblue",
};

function findButtonIcon(type) {
  switch (type) {
    case "add":
      return <BsPlusLg/>;
    case "delete":
      return <BsTrash />;
    case "done":
      return <BsCheckLg/>;
    case "login":
      return <BsPerson/>;
    default:
      return null;
  }
}

function Button({ text, onClickDo, type }) {
  const buttonIcon = findButtonIcon(type);
  return (
    <button
      className="button"
      onClick={() => onClickDo()}
      style={{ backgroundColor: colorMap[type] }}
    >
      <div className="buttonContent">
        {buttonIcon ? <div className="buttonIcon">{buttonIcon}</div> : null}
        {text ? <div className="buttonText">{text}</div> : null}
      </div>
    </button>
  );
}

export default Button;
