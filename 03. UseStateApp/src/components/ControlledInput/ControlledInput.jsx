import { useState } from "react";

export default function ControlledInput() {
  const [text, setText] = useState("");

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-lg w-72 h-64 flex flex-col justify-between">

      <h2 className="text-center font-semibold">Input</h2>

      <div className="flex flex-col justify-center flex-1">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded-lg w-full bg-white dark:bg-gray-700"
        />

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 text-center">
          {text}
        </p>
      </div>

    </div>
  );
}