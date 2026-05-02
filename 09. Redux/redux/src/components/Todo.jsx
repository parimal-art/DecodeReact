import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, toggleTodo, deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((s) => s.todo.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">Todos</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add a new todo..."
          className="flex-1 px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="w-4 h-4"
            />
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="ml-auto px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}