import {
  ADD_TODO,
  DELETE_ALL,
  DELETE_TODO,
  MARK_DONE,
  MARK_UNDONE,
  UPDATE_TODO,
  UPDATE_INPUT_TEXT,
} from "../actionTypes/actionTypes";

export const updateInputText = (text) => ({
  type: UPDATE_INPUT_TEXT,
  payload: text,
});
export const updateTodo = () => ({ type: UPDATE_TODO, payload: "" });
export const markDone = (index) => ({ type: MARK_DONE, payload: index });
export const markUndone = (index) => ({ type: MARK_UNDONE, payload: index });
export const deleteAll = () => ({ type: DELETE_ALL });
export const addTodo = (toDoText) => ({ type: ADD_TODO, payload: toDoText });
export const deleteTodo = (index) => ({ type: DELETE_TODO, payload: index });
