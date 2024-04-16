import React, { useState } from "react";

function Todo({ data, deleteTodos, id, editTodos }) {
  const [isEdit, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(data);

  const editHandler = () => {
    setIsEditing((prev) => !prev);
    editTodos(id, newTodo);
  };

  return (
    <>
      <li>
        {isEdit ? (
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        ) : (
          data
        )}
      </li>
      <button onClick={() => deleteTodos(id)}>Done</button>
      <button onClick={editHandler}>{isEdit ? "Save" : "Edit"}</button>
    </>
  );
}

export default Todo;
