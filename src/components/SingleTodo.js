import React, { useState } from "react";
import EditTodo from "./EditTodo";

function SingleTodo({ todo, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  

  const { id, body } = todo;

  function handleDeleteTodo() {
    fetch(`http://localhost:9292/todos/${id}`, {
      method: "DELETE",
    });
    onDeleteTodo(id);
  }

  function handleTodo(updatedTodo) {
    setIsEditing(false)
    onUpdateTodo(updatedTodo);
  }

  return (
    
    <div className="flex justify-between my-2 border-2 p-1 border-blue-300 rounded-sm text-xl">
 {isEditing ? (
        <EditTodo
          id={id}
          body={body}
          onUpdateTodo={handleTodo}
        />
      ) : (
        <p>{body}</p>
      )}
      {
        <div className="actions">
          <button className="border-2 border-blue-400 px-2 rounded-lg bg-blue-400 mx-2" onClick={() => setIsEditing((isEditing) => !isEditing)}>
            Edit
          </button>
          <button  className="border-2 border-red-400 px-2 rounded-lg bg-red-400" onClick={handleDeleteTodo}>
            Delete
          </button>
        </div>
      }
    </div>
  );
}

export default SingleTodo;
