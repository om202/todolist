export const addTodo = (state, payload) => ({
  ...state,
  todo: [...state.todo, { text: payload, done: false }],
});

export const updateInputText = (state, payload) => ({
  ...state,
  todoText: payload,
});

export const deleteAll = (state) => ({ ...state, todo: [] });

export const deleteTodo = (state, payload) => {
  let todo = state.todo;
  if (todo.length !== 0 && payload >= 0) {
    return {
      ...state,
      todo: [
        ...todo.slice(0, payload),
        ...todo.slice(payload + 1, todo.length),
      ],
    };
  }
};

export const markDone = (state, payload) => {
  let todo = state.todo;
  let newVal = Object.assign({}, state.todo[payload], { done: true });
  if (todo.length !== 0 && payload >= 0) {
    return {
      ...state,
      todo: [
        ...todo.slice(0, payload),
        newVal,
        ...todo.slice(payload + 1, todo.length),
      ],
    };
  }
};

export const markUnDone = (state, payload) => {
  let todo = state.todo;
  let newVal = Object.assign({}, state.todo[payload], { done: false });
  if (todo.length !== 0 && payload >= 0) {
    return {
      ...state,
      todo: [
        ...todo.slice(0, payload),
        newVal,
        ...todo.slice(payload + 1, todo.length),
      ],
    };
  }
};
