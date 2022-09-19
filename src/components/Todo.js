import React, { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import SingleTodo from "./SingleTodo";

function Todo() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/todos")
    .then(res => res.json())
    .then(data => {
      setTodos(data)
    })
  }, [])

  function onAddTodo(newTodo) {
    setTodos([newTodo, ...todos])
  } 

  function onDeleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function onUpdateTodo(updatedTodoObj) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodoObj.id) {
        return updatedTodoObj;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="border-2 border-emerald-300 rounded-lg w-96 h-3/4 w-3/6 bg-emerald-300 p-4 m-auto overflow-auto">
      <div className="">
        <NewTodo onAddTodo={onAddTodo} />
      </div>
    <div className="mt-16">
      {todos.map((todo, index) => (
        <SingleTodo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>
      ))}
    </div>
    </div>
  )
};

export default Todo;