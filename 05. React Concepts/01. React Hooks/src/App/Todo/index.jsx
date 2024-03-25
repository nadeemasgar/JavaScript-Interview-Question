import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, data: "Nadeem" },
    { id: 2, data: "Rahul" },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: new Date().getTime(), data: newTodo }]);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  const editTodo = (id, newTodo) => {
    const updatedTodo = todos.map((todo) => {
      if (id === todo.id) todo.data = newTodo;
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
          editTodo={(newTodo) => editTodo(todo.id, newTodo)}
        />
      ))}
    </>
  );
}

export default Todo;
