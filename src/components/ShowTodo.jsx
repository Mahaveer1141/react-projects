import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removeTodo } from "../redux/actions";

function ShowTodo() {
  const todoLists = useSelector((state) => state);
  const pendingList = todoLists.filter((todo) => !todo.isCompleted);
  const completedList = todoLists.filter((todo) => todo.isCompleted);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Pending Todo</h1>
      <ul>
        {pendingList.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => dispatch(completeTodo(todo.id))}>
              complete
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              remove
            </button>
          </li>
        ))}
      </ul>
      <h1>Completed Todo</h1>
      <ul>
        {completedList.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowTodo;
