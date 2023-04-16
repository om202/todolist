import "./App.css";
import Todo from "./todo/todo";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  function updateTodoText(value) {
    setTodoText(value);
  }

  function addTodoList() {
    if (todoText !== "") {
      setTodoList((prevTodo) => [...prevTodo, todoText]);
      setTodoText("");
    }
  }

  function deleteTodoList(id) {
    setTodoList((prevTodo)=> [...prevTodo.slice(0, id), ...prevTodo.slice(id+1)]);
  }

  return (
    <AppContext.Provider
      value={{ todoText, updateTodoText, todoList, addTodoList, deleteTodoList }}
    >
      <Todo />
    </AppContext.Provider>
  );
}

export default App;
