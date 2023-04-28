import { configureStore } from "@reduxjs/toolkit";
import { rootTodoReducer } from "./reducers/rootReducer";

export const store = configureStore({ reducer: rootTodoReducer });
