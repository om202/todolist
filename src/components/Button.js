import React from "react";
import "./styles/Button.css";
import { BsPlusLg, BsTrash } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { MdDoneAll, MdPerson, MdRedo } from "react-icons/md";
import { useDispatch } from "react-redux";

const colorMap = {
  add: "lightgreen",
  done: "inherit",
  delete: "inherit",
  active: "lightblue",
  login: "lightblue",
  emoji: "white",
  undone: "inherit",
  default: "lightblue"
};

function findButtonIcon(type) {
  switch (type) {
    case "add":
      return <BsPlusLg />;
    case "delete":
      return <BsTrash />;
    case "done":
      return <MdDoneAll />;
    case "login":
      return <MdPerson />;
    case "emoji":
      return <FaRegSmile />;
    case "undone":
      return <MdRedo />;
    default:
      return null;
  }
}

function Button({ text, onClickDo, type, payload }) {
  const dispatch = useDispatch()
  const buttonIcon = findButtonIcon(type);
  return (
    <button
      className="button"
      onClick={() => dispatch(onClickDo(payload))}
      style={{ backgroundColor: colorMap[type] }}
    >
      <div className="buttonContent">
        {buttonIcon ? <div className="">{buttonIcon}</div> : null}
        {text ? <div className="buttonText">{text}</div> : null}
      </div>
    </button>
  );
}

export default Button;
