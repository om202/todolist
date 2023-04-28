import {
  ADD_TODO,
  DELETE_ALL,
  DELETE_TODO,
  MARK_DONE,
  MARK_UNDONE,
  UPDATE_TODO,
  UPDATE_INPUT_TEXT,
} from "../actionTypes/actionTypes";
import { markUndone } from "../actions/actions";
import { rootState } from "../rootState";
import {addTodo, deleteAll, deleteTodo, markDone, updateInputText} from './todoReducer';

export const rootTodoReducer = (state = rootState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_TEXT: 
      return updateInputText(state, action.payload)
    case UPDATE_TODO:
      return null;
    case MARK_DONE:
      return markDone(state, action.payload);
    case MARK_UNDONE:
      return markUndone(state, action.payload);
    case DELETE_ALL:
      return deleteAll(state);
    case ADD_TODO:
      return addTodo(state, action.payload);
    case DELETE_TODO:
      return deleteTodo(state, action.payload);
    default:
      return state;
  }
};
