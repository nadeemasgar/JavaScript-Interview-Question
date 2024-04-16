import React from "react";
import Todo from "../Todo";

function Todos({ todos, deleteTodos, editTodos }) {
  return (
    <>
      {todos.map((todoItem) => {
        return (
          <Todo
            key={todoItem.id}
            data={todoItem.data}
            id={todoItem.id}
            deleteTodos={deleteTodos}
            editTodos={editTodos}
          />
        );
      })}
    </>
  );
}

export default Todos;
