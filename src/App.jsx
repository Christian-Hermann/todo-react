import { useState } from "react";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "gym", completed: false },
    { text: "eat", completed: false },
    { text: "work", completed: false },
  ]);
  const [text, setText] = useState("");

  function addTodo() {
    setTodos([...todos, { text: text, completed: false }]);
    setText("");
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
