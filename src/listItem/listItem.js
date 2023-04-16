import React, { useContext } from "react";
import "./listItem.css";
import Button from "../button/button";
import { AppContext } from "../App";

function doneItem() {
  return null;
}

function ListItem({ text, id}) {
  const {deleteTodoList, addDoneList} = useContext(AppContext);
  return (
    <div className="listItemBox">
      <li className="listItem">{text}</li>
      <Button text={'Done'} onClickDo={()=>addDoneList(id)} type={'normal'}/>
      <Button text={'Delete'} onClickDo={()=>deleteTodoList(id)} type={'delete'}/>
    </div>
  );
}

export default ListItem;
