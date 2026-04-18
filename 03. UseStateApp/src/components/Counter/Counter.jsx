import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-lg w-72 h-64 flex flex-col justify-between hover:scale-105 transition">

      <h2 className="text-center font-semibold">Counter</h2>

      <div className="flex flex-col items-center justify-center flex-1">
        <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          {count}
        </p>

        <div className="flex gap-3 mt-4">
          <button onClick={() => setCount(count + 1)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full">+</button>
          <button onClick={() => setCount(count - 1)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full">-</button>
          <button onClick={() => setCount(0)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded-full">Reset</button>
        </div>
      </div>

    </div>
  );
}