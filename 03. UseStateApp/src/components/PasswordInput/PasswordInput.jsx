import { useState } from "react";

export default function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-lg w-72 h-64 flex flex-col justify-between">

      <h2 className="text-center font-semibold">Password</h2>

      <div className="flex flex-col justify-center flex-1">
        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          className="border p-2 rounded-lg w-full bg-white dark:bg-gray-700"
        />

        <button
          onClick={() => setShow(!show)}
          className="mt-2 text-indigo-500 dark:text-indigo-400 text-sm text-center"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

    </div>
  );
}