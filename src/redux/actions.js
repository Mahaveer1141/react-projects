export function addTodo(id, todoTitle) {
  let payload = {
    id,
    todoTitle,
  };
  return {
    type: "ADD_TODO",
    payload,
  };
}

export function completeTodo(id) {
  return {
    type: "COMPLETE_TODO",
    payload: {
      id,
    },
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: {
      id,
    },
  };
}
