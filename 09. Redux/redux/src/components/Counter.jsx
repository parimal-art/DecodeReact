import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((s) => s.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">Counter</h2>
      <p className="text-3xl font-bold mb-4 text-blue-600">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}