import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(["gym", "eat", "work"]);

  function addTodo() {
    setTodos([...todos, "New todo"]);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
