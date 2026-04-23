function Filter({ dispatch }) {
  return (
    <div className="flex justify-between mb-4">
      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}
        className="bg-gray-700 px-3 py-1 rounded"
      >
        All
      </button>

      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
        className="bg-green-600 px-3 py-1 rounded"
      >
        Completed
      </button>

      <button
        onClick={() => dispatch({ type: "SET_FILTER", payload: "pending" })}
        className="bg-yellow-600 px-3 py-1 rounded"
      >
        Pending
      </button>
    </div>
  );
}

export default Filter;