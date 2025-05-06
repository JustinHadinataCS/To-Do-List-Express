function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center p-4 border rounded shadow-sm bg-white">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
