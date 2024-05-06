import React, { useState } from "react";
import "./index.css"

function Todo({ todo, removeTodo, editTodo }) {
  const [isEdit, setIsEdit] = useState(false)
  const [newTodo, setNewTodo] = useState(todo.name);

  const onDoneHandler = () => {
    removeTodo(todo.id)
  }

  const onchangeHandler = (e) => {
    setNewTodo(e.target.value);
  }
  
  const saveTodo = () => {
    editTodo(todo.id, newTodo)
    setIsEdit(false);
  }

  return (
    <div className="todo">
      {isEdit ? <input type="text" value={newTodo} onChange={(e) => onchangeHandler(e)} />: <div>{todo.name}</div>}
      <div className="btnControls">
        {isEdit ? <button onClick={saveTodo}>Save</button> : <button onClick={() => setIsEdit(!isEdit)}>Edit</button>} 
        {isEdit ? <button onClick={() => setIsEdit(false)}>Cancel</button>: null}
        <button onClick={onDoneHandler}>Done</button>
      </div>
    </div>
  );
}

export default Todo;
