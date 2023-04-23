import "./App.css";
import Todo from "./pages/Todo";
import { createContext, useEffect, useState } from "react";
import ls from "local-storage";
import Navbar from "./pages/Navbar";
import {
  Route,
  Routes,
} from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

export const AppContext = createContext();

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState(ls.get("todolist") ?? []);

  // on todoList updated
  useEffect(() => {
    ls.set("todolist", todoList);
  }, [todoList]);

  function updateTodoText(value) {
    setTodoText(value);
  }

  function addTodoList() {
    if (todoText) {
      setTodoList((prevTodo) => [...prevTodo, todoText]);
      setTodoText("");
    }
  }

  function deleteTodoList(id) {
    setTodoList((prevTodo) => [
      ...prevTodo.slice(0, id),
      ...prevTodo.slice(id + 1),
    ]);
  }

  return (
    <AppContext.Provider
      value={{
        todoText,
        updateTodoText,
        todoList,
        addTodoList,
        deleteTodoList,
      }}
    >
      <div id="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Todo />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
