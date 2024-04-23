import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <span>{todo.name}</span>
      <button>Edit</button>
      <button>Done</button>
    </div>
  );
}

export default Todo;
