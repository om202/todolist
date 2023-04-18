import React, { useContext } from "react";
import "./styles/ListItem.css";
import Button from "./Button";
import { AppContext } from "../App";

function ListItem({ text, id}) {
  const {deleteTodoList} = useContext(AppContext);
  return (
    <div className="listItemBox">
      <li className="listItem">{text}</li>
      <Button onClickDo={()=>deleteTodoList(id)} type={'done'}/>
    </div>
  );
}

export default ListItem;
