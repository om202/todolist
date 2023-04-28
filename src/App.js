import "./App.css";
import Todo from "./pages/Todo";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Provider } from "react-redux";
import {store} from './services/store/store';

function App() {
  return (
    <Provider store={store}>
      <div id="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </Provider>
  );
}

export default App;
