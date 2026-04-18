import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg w-72 h-64 flex flex-col justify-between hover:scale-105 transition">

      <h2 className="text-center font-semibold">Todo</h2>

      <div className="flex flex-col justify-center flex-1">
        <div className="flex gap-2">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            className="border p-2 rounded-lg w-full"
            placeholder="Enter task..."
          />

          <button
            onClick={addTask}
            className="bg-indigo-500 text-white px-3 rounded-lg"
          >
            +
          </button>
        </div>

        <ul className="mt-2 space-y-1 text-sm overflow-auto max-h-20">
          {todos.map((t, i) => (
            <li key={i} className="flex justify-between">
              <span
                onClick={() => {
                  const updated = [...todos];
                  updated[i].done = !updated[i].done;
                  setTodos(updated);
                }}
                className={`${t.done ? "line-through text-gray-400" : ""} cursor-pointer`}
              >
                {t.text}
              </span>

              <button
                onClick={() => setTodos(todos.filter((_, idx) => idx !== i))}
                className="text-red-500"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}