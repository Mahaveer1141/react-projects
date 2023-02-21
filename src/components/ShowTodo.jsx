import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../redux/actions";

function ShowTodo() {
  const todoLists = useSelector((state) => state);
  const pendingList = todoLists.filter((todo) => !todo.isCompleted);
  const completedList = todoLists.filter((todo) => todo.isCompleted);

  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(completeTodo(id));
  }

  return (
    <div>
      <h1>Pending Todo</h1>
      <ul>
        {pendingList.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleClick(todo.id)}>complete</button>
          </li>
        ))}
      </ul>
      <h1>Completed Todo</h1>
      <ul>
        {completedList.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowTodo;
