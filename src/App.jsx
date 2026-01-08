import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(["gym", "eat", "work"]);
  const [text, setText] = useState("");

  function addTodo() {
    setTodos([...todos, text]);
    setText("");
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
