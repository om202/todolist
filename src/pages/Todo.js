import React, { memo } from "react";
import "./styles/Todo.css";
import Input from "../components/Input";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import { FaGlobeAmericas } from "react-icons/fa";
import { addTodo, deleteAll } from "../services/store/actions/actions";
import { useSelector } from "react-redux";
import { getTodoList } from "../services/store/selectors/selectors";

function Todo() {
  let user = "Public";
  const state = useSelector((state) => state);
  const todoList = getTodoList(state);
  return (
    <div id="todoBox" className="box-shadow-0">
      <span className="flexCenter">
        <FaGlobeAmericas className="smallMarginRight iconLight" />
        {user}
      </span>
      <div id="inputBox">
        <Input
          placeHolderText="Write To-Do notes here..."
          onKeyDownDo={(text) => addTodo(text)}
          autoFocusActive={true}
          maxLength={64}
        />
      </div>
      <div className="toDoListBox">
        {todoList.length !== 0 ? (
          <ol>
            {todoList.map((todo, id) => (
              <ListItem key={id} todo={todo} id={id} />
            ))}
            <Button text={"Delete All"} type={"default"} onClickDo={deleteAll}/>
          </ol>
        ) : (
          <span className="empty">No Items 😕</span>
        )}
      </div>
    </div>
  );
}

export default memo(Todo);
