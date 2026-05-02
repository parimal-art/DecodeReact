import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Users from "./components/Users";
import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
  const dark = useSelector((s) => s.theme.dark);

  // 🔥 Apply dark class to body
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white transition">
      <div className="max-w-3xl mx-auto space-y-6">
        <ThemeToggle />
        <Counter />
        <Todo />
        <Users />
      </div>
    </div>
  );
}