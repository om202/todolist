import "./App.css";
import Todo from "./pages/Todo";
import { createContext, useEffect, useState } from "react";
import ls from "local-storage";

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
        <Todo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
