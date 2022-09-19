import React, { useState } from "react";

function EditTodo(todo, onUpdateTodo) {
  const [todoBody, setTodoBody] = useState(todo.body);

  function handleChange(e) {
    setTodoBody(e.target.value);
  }

  function handleUpdateTodo(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/todos/${todo.id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        body: todoBody
      })
    })
      .then((r) => r.json())
      .then((updatedTodo) => onUpdateTodo(updatedTodo));
  }

  return (
    <form onSubmit={handleUpdateTodo}>
      <input type="text" name="body" value={todoBody} onChange={handleChange}/>
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditTodo;
