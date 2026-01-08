import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(["gym", "eat", "work"]);

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
