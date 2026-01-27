import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

// Key name to save/load todos in local storage
const STORAGE_KEY = "todos";

// STATE for todos
// Runs once the app loads
// If there are todos in local storage use them
// Otherwise use default todos
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

  // STATE for text
  const [text, setText] = useState("");

  // FUNCTION to add todo
  // Creates new todo object using current text
  // Adds text to existing todos array
  // Updates state with new arrray
  // Then clears inputs
  function addTodo() {
    setTodos([...todos, { text: text, completed: false }]);
    setText("");
  }

  // FUNCTION toggleTodo
  // When clicked index is found switch completed true/false
  // Leave the other todos untouched
  // Then update state with new array
  function toggleTodo(indexToggle) {
    const newTodos = todos.map((todo, index) => {
      if (index === indexToggle) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  // FUNCTION deleteTodo
  // Creates a new array without the todo at indexDelete
  // Update state with new array
  function deleteTodo(indexDelete) {
    const newTodos = todos.filter((todo, index) => index !== indexDelete);
    setTodos(newTodos);
  }

  // EFFECT save todos to local storage
  // This runs everytime todo state changes
  // Converts todos array to a string
  // Saves it under STORAGE_KEY
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // RENDER
  // TodoForm handles input and the add button
  // TodoList displays todos and handles toggle/delete
  return (
    <div className="app">
      <h1>Todos...</h1>
      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
