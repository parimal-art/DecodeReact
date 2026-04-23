import { FaTrash, FaCheckCircle } from "react-icons/fa";

function TaskItem({ task, dispatch }) {
  return (
    <li className="flex justify-between items-center bg-gray-700 px-3 py-2 rounded-lg">
      
      <span
        className={`flex-1 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>

      <div className="flex gap-3 items-center">
        
        {/* COMPLETE BUTTON */}
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_TASK", payload: task.id })
          }
          className="text-green-400 hover:text-green-600"
        >
          <FaCheckCircle />
        </button>

        {/* DELETE BUTTON */}
        <button
          onClick={() =>
            dispatch({ type: "DELETE_TASK", payload: task.id })
          }
          className="text-red-400 hover:text-red-600"
        >
          <FaTrash />
        </button>

      </div>
    </li>
  );
}
export default TaskItem;