import { useState } from "react";
import Todos from "./components/Todos";
function App() {
  const [todoItems, setTodoItems] = useState([
    { data: "todo1", id: "123" },
    { data: "todo2", id: "213" },
  ]);
  const [todo, setTodo] = useState("");

  const addTodoHandler = () => {
    setTodoItems((prev) => [{ data: todo, id: Date.now() }, ...prev]);
    setTodo("");
  };

  const editTodos = (id, data) => {
    const editTodos = todoItems.map((todo) => {
      if (id === todo.id) {
        todo.data = data;
      }
      return todo;
    });
    setTodoItems(editTodos);
  };

  const deleteTodos = (id) => {
    const filterTodos = todoItems.filter((todo) => {
      return todo.id !== id;
    });
    setTodoItems(filterTodos);
  };
  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodoHandler}>Add Todo</button>

      <Todos
        todos={todoItems}
        deleteTodos={(id) => deleteTodos(id)}
        editTodos={(id, data) => editTodos(id, data)}
      />
    </>
  );
}

export default App;
