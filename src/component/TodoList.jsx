import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TodoList({ pass, removeTodo, doneTodo }) {
  return (
    <div>
      {pass.length === 0 ? (
        <h1>Todo not here</h1>
      ) : (
        <ul className="flex flex-col justify-center border-2 divide-y">
          {pass.map((todo, i) => {
            return (
              <li className="p-4 flex justify-between items-center" key={i}>
                <p
                  className={`${todo.done ? "text-red-600 line-through" : ""}`}
                >
                  {todo.title}
                </p>
                <div className="flex gap-3">
                  <input
                    className=""
                    // checked={todo.done}
                    defaultChecked={todo.done}
                    type="checkbox"
                    onClick={() => doneTodo(todo.id)}
                  />
                  <button onClick={() => removeTodo(todo.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
