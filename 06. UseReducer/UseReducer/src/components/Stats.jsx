function Stats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="flex justify-between text-sm mb-3 text-gray-300">
      <span>Total: {total}</span>
      <span>Completed: {completed}</span>
    </div>
  );
}

export default Stats;