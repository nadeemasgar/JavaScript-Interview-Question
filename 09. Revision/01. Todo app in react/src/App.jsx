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
    return <Todo key={idx} todo={todo} removeTodo={(id) => removeTodo(id)} editTodo={(id, newTodo) => editTodo(id, newTodo)} />;
  };

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const editTodo = (id, newTodoName) => {
    const editedTodo = todosList.map((todo) => {
      if(id === todo.id) {
        todo.name = newTodoName
      }
      return todo;
    })
    setTodosList(editedTodo)
  }

  const addTodos = () => {
    if(!todo) return; 
    setTodosList((prev) => [{ id: Date.now(), name: todo }, ...prev]);
    setTodo("");
  };

  const removeTodo = (id) => {
    const filteredTodo = todosList.filter((todo) => todo.id !== id)
    setTodosList(filteredTodo);
  }

  return (
    <div className="mainContainer">
      <div className="todoContainer">
        <input type="text" value={todo} onChange={(e) => onChangeHandler(e)} />
        <button className="btnCss" onClick={addTodos}>Add</button>
        {(todosList ?? []).map(renderTodos)}
      </div>
    </div>
  );
}

export default App;
