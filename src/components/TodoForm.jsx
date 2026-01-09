export default function TodoForm({ text, setText, addTodo }) {
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
}
