import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function TaskInput({ dispatch }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 px-3 py-2 rounded-lg bg-gray-700 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
      >
        <FaPlus />
        Add
      </button>
    </div>
  );
}

export default TaskInput;