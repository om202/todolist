import React, { useContext } from "react";
import "./styles/ListItem.css";
import Button from "./Button";
import { AppContext } from "../App";

function ListItem({ text, id}) {
  const {deleteTodoList} = useContext(AppContext);
  return (
    <div className="listItemBox">
      <li className="listItem">{text}</li>
      <Button text={'Delete'} onClickDo={()=>deleteTodoList(id)} type={'delete'}/>
    </div>
  );
}

export default ListItem;
