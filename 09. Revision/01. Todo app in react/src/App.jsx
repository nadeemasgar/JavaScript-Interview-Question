import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todosList, setTodosList] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Microsoft" },
  ]);

  const renderTodos = (todo, idx) => {
    return <Todo key={idx} todo={todo} />;
  };

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodos = () => {
    setTodosList((prev) => [{ id: Date.now(), name: todo }, ...prev]);
    setTodo("");
  };
  return (
    <div className="mainContainer">
      <div className="todoContainer">
        <input type="text" value={todo} onChange={(e) => onChangeHandler(e)} />
        <button onClick={addTodos}>Add</button>
        {(todosList ?? []).map(renderTodos)}
      </div>
    </div>
  );
}

export default App;
