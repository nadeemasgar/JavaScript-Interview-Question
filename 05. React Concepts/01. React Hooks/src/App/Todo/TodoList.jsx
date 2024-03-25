import { Fragment, useState } from "react";
import "./Todo.css";
const TodoList = ({ todo, deleteTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoData, setTodoData] = useState(todo.data);
  return (
    <div>
      <li>
        {isEdit ? (
          <input
            type="text"
            value={todoData}
            onChange={(e) => setTodoData(e.target.value)}
          />
        ) : (
          <span>{todo.data}</span>
        )}
      </li>
      <button className="button" onClick={deleteTodo}>
        Done
      </button>
      <button
        className="button"
        onClick={() => {
          setIsEdit((prev) => !prev);
          editTodo(todoData);
        }}
      >
        {isEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default TodoList;
