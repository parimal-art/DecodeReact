import TaskItem from "./TaskItem";

function TaskList({ state, dispatch }) {
  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === "completed") return task.completed;
    if (state.filter === "pending") return !task.completed;
    return true;
  });

  return (
    <ul className="space-y-2">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default TaskList;