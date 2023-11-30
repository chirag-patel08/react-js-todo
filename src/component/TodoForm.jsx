import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      title: item,
      done: false,
    });
    setItem("");
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <form method="POST" onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="border-2 flex-grow"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          type="submit"
          className="bg-sky-500 border-2 p-2 rounded-lg border-sky-700"
        >
          Add todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
