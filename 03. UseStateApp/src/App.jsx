import { useState, useEffect } from "react";

import Counter from "./components/Counter/Counter";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import ShowHideText from "./components/ShowHideText/ShowHideText";
import PasswordInput from "./components/PasswordInput/PasswordInput";
import ControlledInput from "./components/ControlledInput/ControlledInput";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen transition duration-300 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          React Mini Apps 🚀
        </h1>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black transition"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <Counter />
        <ToggleButton />
        <ShowHideText />
        <PasswordInput />
        <ControlledInput />
        <TodoList />
      </div>
    </div>
  );
}