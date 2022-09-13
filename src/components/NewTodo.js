import React, { useState } from "react";

function NewTodo({ onAddTodo }) {
  const [body, setBody] = useState("");

  function handleChange(e) {
    setBody(e.target.value);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    if (body === "") {
      return false;
    } else {
      fetch("http://localhost:9292/todos", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: body }),
      })
        .then((res) => res.json())
        .then((newTodo) => {
          onAddTodo(newTodo);
          setBody("");
        });
    }
  }

  return (
    <div className="flex justify-between fixed border-2 p-2 bg-blue-300 border-blue-300 rounded-lg w-2/6">
      <input
        value={body}
        onChange={handleChange}
        type="text"
        className="outline-none h-10 w-96 rounded-lg"
      />
      <div>
        <button
          className="border-2 border-green-500 bg-green-500 rounded-lg ml-4 px-2 h-10 w-16"
          type="submit"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default NewTodo;
