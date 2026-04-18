import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = (props) => {
  // props.users contains full array

  return (
    <div className="border-2 border-blue-400 p-4 rounded-xl mb-3">
      <h2 className="text-lg font-semibold text-blue-600 mb-2">
        Dashboard
      </h2>

      {/* Passing data down */}
      <Sidebar users={props.users} />
    </div>
  );
};

export default Dashboard;