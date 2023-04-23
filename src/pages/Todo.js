import React, { useContext, memo } from "react";
import "./styles/Todo.css";
import Input from "../components/Input";
import { AppContext } from "../App";
import ListItem from "../components/ListItem";
import { FaGlobeAmericas } from "react-icons/fa";

function Todo() {
  const { addTodoList, todoList, updateTodoText, todoText } =
    useContext(AppContext);
  let user = "Public";
  return (
    <div id="todoBox" className="box-shadow-0">
      <span className="flexCenter">
        <FaGlobeAmericas className="smallMarginRight iconLight" />
        {user}
      </span>
      <div id="inputBox">
        <Input
          placeHolderText="Write To-Do notes here..."
          autoFocusActive={true}
          value={todoText.text}
          onChangeDo={updateTodoText}
          maxLength={64}
          onKeyDownDo={addTodoList}
        />
      </div>
      <div className="toDoListBox">
        {todoList.length !== 0 ? (
          <ol>
            {todoList.map((t, id) => (
              <ListItem key={id} todo={t} id={id} />
            ))}
          </ol>
        ) : (
          <span className="empty">No Items 😕</span>
        )}
      </div>
    </div>
  );
}

export default memo(Todo);
