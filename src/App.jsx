import { useState } from "react";
import TodoForm from "./components/TodoForm";

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
      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
