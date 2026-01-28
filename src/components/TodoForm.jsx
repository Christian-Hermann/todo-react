export default function TodoForm({ text, setText, addTodo }) {
  // COMPONENT
  // Controls the input
  // Calls addTodo when the button is clicked
  return (
    <div>
      {/* Value comes from App state */}
      {/* onChange updates App state */}
      <input value={text} onChange={(e) => setText(e.target.value)} />

      {/* Click the button to add a todo */}
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
}
