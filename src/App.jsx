import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

// key name to save/load todos in local storage
const STORAGE_KEY = "todos";

// STATE for todos
// runs once the app loads
// if there are todos in local storage use them
// otherwise use default todos
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
  // creates new todo object using current text
  // adds text to existing todos array
  // updates state with new arrray
  // then clears inputs
  function addTodo() {
    setTodos([...todos, { text: text, completed: false }]);
    setText("");
  }

  // FUNCTION toggleTodo
  // When clicked index is found switch completed true/false
  // leave the other todos untouched
  // then update state with new array
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
  // creates a new array without the todo at indexDelete
  // update state with new array
  function deleteTodo(indexDelete) {
    const newTodos = todos.filter((todo, index) => index !== indexDelete);
    setTodos(newTodos);
  }

  // EFFECT save todos to local storage
  // this runs everytime todo state changes
  // converts todos array to a string
  // saves it under STORAGE_KEY
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
