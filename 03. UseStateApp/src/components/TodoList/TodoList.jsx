import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-lg w-72 h-64 flex flex-col justify-between hover:scale-105 transition duration-300">

      <h2 className="text-center font-semibold">Todo</h2>

      <div className="flex flex-col flex-1">
        {/* INPUT */}
        <div className="flex gap-2">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // smoother UX
                addTask();
              }
            }}
            className="border p-2 rounded-lg w-full bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter task..."
          />

          <button
            onClick={addTask}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 rounded-lg"
          >
            +
          </button>
        </div>

        {/* LIST */}
        <ul className="mt-2 space-y-1 text-sm overflow-auto max-h-24 pr-1">
          {todos.map((t, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
            >
              <span
                onClick={() => toggleTask(i)}
                className={`cursor-pointer ${
                  t.done ? "line-through text-gray-400" : ""
                }`}
              >
                {t.text}
              </span>

              <button
                onClick={() => deleteTask(i)}
                className="text-red-500 hover:text-red-600"
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