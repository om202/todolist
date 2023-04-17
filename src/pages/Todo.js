import React, { useContext } from "react";
import "./styles/Todo.css";
import Button from "../components/Button";
import Input from "../components/Input";
import { AppContext } from "../App";
import ListItem from "../components/ListItem";

function Todo() {
  const { addTodoList, todoList } = useContext(AppContext);
  return (
    <div id="todoBox">
      <span className="title">To-Do List</span>
      <div id="inputBox">
        <Input />
        <Button
          text={"Add"}
          onClickDo={addTodoList}
          color={"green"}
          type={"normal"}
        />
      </div>
      {todoList.length !== 0 ? (
        <ol>
          {todoList.map((t, id) => (
            <ListItem key={id} text={t} id={id} />
          ))}
        </ol>
      ) : (
        <span className="empty">No Items</span>
      )}
    </div>
  );
}

export default Todo;
