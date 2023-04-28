import React from "react";
import "./styles/ListItem.css";
import Button from "./Button";
import { deleteTodo, markDone, markUndone } from "../services/store/actions/actions";

function ListItem({ todo, id}) {
  return (
    <div className="listItemBox">
      {todo.done ? <li className="listItem listItemDone">{todo.text}</li> : <li className="listItem">{todo.text}</li>}
      {todo.done ? <Button onClickDo={markUndone} type={'undone'} payload={id}/>: <Button onClickDo={markDone} type={'done'} payload={id}/>}
      <Button onClickDo={deleteTodo} type={'delete'} payload={id}/>
    </div>
  );
}

export default ListItem;
