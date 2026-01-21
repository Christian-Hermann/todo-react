import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const STORAGE_KEY = "todos";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [
      { text: "gym", completed: false },
      { text: "eat", completed: false },
      { text: "work", completed: false },
    ];
  });

  const [text, setText] = useState("");

  function addTodo() {
    setTodos([...todos, { text: text, completed: false }]);
    setText("");
  }

  function toggleTodo(indexToggle) {
    const newTodos = todos.map((todo, index) => {
      if (index === indexToggle) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  function deleteTodo(indexDelete) {
    const newTodos = todos.filter((todo, index) => index !== indexDelete);
    setTodos(newTodos);
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <h1>Todos...</h1>
      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
