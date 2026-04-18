import { useState } from "react";

export default function ShowHideText() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-lg w-72 h-64 flex flex-col justify-between">

      <h2 className="text-center font-semibold">Show / Hide</h2>

      <div className="flex flex-col items-center justify-center flex-1">
        <button
          onClick={() => setShow(!show)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-full"
        >
          {show ? "Hide" : "Show"}
        </button>

        {show && (
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-center">
            Hidden text appears like magic ✨
          </p>
        )}
      </div>

    </div>
  );
}