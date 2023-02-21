function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.todoTitle,
          isCompleted: false,
        },
      ];

    case "COMPLETE_TODO":
      return state.map((todo) =>
        todo.id !== action.payload.id ? todo : { ...todo, isCompleted: true }
      );

    default:
      return state;
  }
}

export default todos;
