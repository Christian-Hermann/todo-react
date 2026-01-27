export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  // COMPONENT
  // Recieves todos from app by way of props
  // Displays todos
  // Calls Apps functions when the user interacts
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {/* Checkbox shows todo.completed */}
          {/* When changed it tells App which todo to toggle */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          {/* Displays the todo text */}
          {todo.text}

          {/* Delete button tells App which todo to remove */}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
