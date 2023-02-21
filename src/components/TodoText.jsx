import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

function TodoText() {
  const [todoTitle, setTodoTitle] = useState("");
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(id, todoTitle));
    setId(id + 1);
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todoTitle}
          placeholder="todo..."
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoText;
