import React from "react";
import Dashboard from "./Dashboard";

function App() {
  // ✅ Array of users (multiple data)
  const users = [
    { id: 1, name: "Parimal", age: 22 },
    { id: 2, name: "Rahul", age: 24 },
    { id: 3, name: "Amit", age: 21 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-[500px]">

        <h1 className="text-2xl font-bold text-center mb-4 text-indigo-600">
          Props Drilling with Map 🚀
        </h1>

        {/* ✅ Passing array */}
        <Dashboard users={users} />
      </div>
    </div>
  );
}

export default App;