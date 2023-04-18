import React, { useContext } from "react";
import "./styles/Todo.css";
import Button from "../components/Button";
import Input from "../components/Input";
import { AppContext } from "../App";
import ListItem from "../components/ListItem";
import { FaTasks } from "react-icons/fa";

function Todo() {
  const { addTodoList, todoList, updateTodoText, todoText } =
    useContext(AppContext);
  return (
    <div id="todoBox">
      <div className="titleBox">
        <FaTasks className="title" />
        <span className="title">To-Do List</span>
      </div>
      <div id="inputBox">
        <Input
          placeHolderText="Write To-Do notes here..."
          autoFocusActive={true}
          value={todoText}
          onChangeDo={updateTodoText}
          maxLength={100}
          onKeyDownDo={addTodoList}
        />
        <Button onClickDo={addTodoList} color={"green"} type={"add"} />
      </div>
      <div className="toDoListBox">
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
    </div>
  );
}

export default Todo;
