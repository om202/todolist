import React, { useContext } from "react";
import "./styles/ListItem.css";
import Button from "./Button";
import { AppContext } from "../App";

function ListItem({ todo, id}) {
  const {deleteTodoList, markDone} = useContext(AppContext);
  return (
    <div className="listItemBox">
      {todo.done ? <li className="listItem listItemDone">{todo.text}</li> : <li className="listItem">{todo.text}</li>}
      {todo.done ? null: <Button onClickDo={()=>markDone(id)} type={'done'}/>}
      <Button onClickDo={()=>deleteTodoList(id)} type={'delete'}/>
    </div>
  );
}

export default ListItem;
