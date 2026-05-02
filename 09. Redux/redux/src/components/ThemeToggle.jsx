import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

export default function ThemeToggle() {
  const dark = useSelector((s) => s.theme.dark);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {dark ? "Dark Mode" : "Light Mode"}
    </button>
  );
}