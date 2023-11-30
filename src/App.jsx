import { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (item) => {
    setTodo([...todo, item]);
  };

  const removeTodo = (id) => {
    const result = todo.filter((todo) => todo.id !== id);

    setTodo([...result]);
  };

  const doneTodo = (id) => {
    setTodo(
      todo.map((todo) => (todo.id == id ? { ...todo, done: !todo.done } : todo))
    );
  };

  return (
    <div className="w-[40%] flex-col flex gap-3 mx-auto">
      <TodoForm addTodo={addTodo} />
      <TodoList pass={todo} removeTodo={removeTodo} doneTodo={doneTodo} />
    </div>
  );
}

export default App;
