import { useState } from "react";

export default function ToggleButton() {
  const [on, setOn] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-lg w-72 h-64 flex flex-col justify-between hover:scale-105 transition">

      <h2 className="text-center font-semibold">Toggle</h2>

      <div className="flex items-center justify-center flex-1">
        <button
          onClick={() => setOn(!on)}
          className={`px-6 py-2 rounded-full text-white ${on ? "bg-green-500" : "bg-red-500"}`}
        >
          {on ? "ON 🟢" : "OFF 🔴"}
        </button>
      </div>

    </div>
  );
}