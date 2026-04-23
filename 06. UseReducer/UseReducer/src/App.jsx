import { useReducer } from "react";
import { taskReducer, initialState } from "./reducer/taskReducer";

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 w-full max-w-md p-6 rounded-xl shadow-lg text-white">
        <Header />
        <TaskInput dispatch={dispatch} />
        <Filter dispatch={dispatch} />
        <Stats tasks={state.tasks} />
        <TaskList state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;